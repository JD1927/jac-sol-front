import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PersonService } from 'src/app/dashboard/services/person/person.service';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ModalType } from 'src/app/shared/models/error.model';
import { PersonHobby } from 'src/app/shared/models/person.model';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';
import { getHobbyList } from 'src/app/store/actions/admin/admin.actions';
import { AdminState } from 'src/app/store/reducers/admin/admin.reducer';
import { AppState } from 'src/app/store/reducers/app.reducer';

@Component({
  selector: 'app-person-hobby',
  templateUrl: './person-hobby.component.html',
  styleUrls: ['./person-hobby.component.scss']
})
export class PersonHobbyComponent implements OnInit {

  personHobbyList: PersonHobby[] = [];
  hobbyList: AdminModel[] = [];
  isLoading = false;

  hobbyList$: Subscription = new Subscription();

  constructor(
    private personService: PersonService,
    private alertService: AlertModalService,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: { personId: number },
  ) { }

  ngOnInit(): void {
    this.getHobbyList();
    this.getPersonHobbyList();
  }

  getHobbyList(): void {
    this.store.dispatch(getHobbyList());
    this.hobbyList$ = this.store.select(state => state.adminState)
      .pipe(
        tap((adminState: AdminState | undefined) => {
          if (adminState?.hobbyList && adminState?.hobbyList.length > 0) {
            this.hobbyList = [...adminState?.hobbyList];
            console.table(this.hobbyList);
          }
        })
      )
      .subscribe();
  }

  getPersonHobbyList(): void {
    const { personId } = this.data;
    this.isLoading = true;
    this.personService.getPersonHobbyList(personId).subscribe(
      (res) => this.personHobbyList = [...res],
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
      () => this.isLoading = false
    );
  }

  onAddPersonHobby(hobbyId: number): void {
    const { personId } = this.data;
    const personHobby: PersonHobby = { hobbyId, personId };
    this.personService.addPersonHobby(personHobby)
      .subscribe(
        () => this.getPersonHobbyList(),
        (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
      );
  }

  onDeletePersonHobby(personHobby: PersonHobby): void {
    const { personId, hobbyId } = personHobby;
    this.personService.deletePersonHobby(personId, hobbyId).subscribe(
      () => this.getPersonHobbyList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
    );
  }

  hasHobby(hobbyId: number): boolean {
    const found = this.personHobbyList.find((ph) => ph.hobbyId === hobbyId);
    return found ? true : false;
  }

}
