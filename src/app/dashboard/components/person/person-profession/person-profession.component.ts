import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PersonService } from 'src/app/dashboard/services/person/person.service';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ModalType } from 'src/app/shared/models/error.model';
import { PersonProfession } from 'src/app/shared/models/person.model';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';
import { getProfessionList } from 'src/app/store/actions/admin/admin.actions';
import { AdminState } from 'src/app/store/reducers/admin/admin.reducer';
import { AppState } from 'src/app/store/reducers/app.reducer';

@Component({
  selector: 'app-person-profession',
  templateUrl: './person-profession.component.html',
  styleUrls: ['./person-profession.component.scss']
})
export class PersonProfessionComponent implements OnInit {

  personProfessionList: PersonProfession[] = [];
  professionList: AdminModel[] = [];
  isLoading = false;

  professionList$: Subscription = new Subscription();

  constructor(
    private personService: PersonService,
    private alertService: AlertModalService,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: { personId: number },
  ) { }

  ngOnInit(): void {
    this.getProfessionList();
    this.getPersonProfessionList();
  }

  getProfessionList(): void {
    this.store.dispatch(getProfessionList());
    this.professionList$ = this.store.select(state => state.adminState)
      .pipe(
        tap((adminState: AdminState | undefined) => {
          if (adminState?.professionList && adminState?.professionList.length > 0) {
            this.professionList = [...adminState?.professionList];
          }
        })
      )
      .subscribe();
  }

  getPersonProfessionList(): void {
    const { personId } = this.data;
    this.isLoading = true;
    this.personService.getPersonProfessionList(personId).subscribe(
      (res) => {
        this.personProfessionList = [...res];
        console.table(this.personProfessionList);
      },
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
      () => this.isLoading = false
    );
  }

  onAddPersonProfession(professionId: number): void {
    const { personId } = this.data;
    const personProfession: PersonProfession = { professionId, personId };
    this.personService.addPersonProfession(personProfession)
      .subscribe(
        () => this.getPersonProfessionList(),
        (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
      );
  }

  onDeletePersonProfession(personProfession: PersonProfession): void {
    const { personId, professionId } = personProfession;
    this.personService.deletePersonProfession(personId, professionId).subscribe(
      () => this.getPersonProfessionList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
    );
  }

  hasProfession(professionId: number): boolean {
    const found = this.personProfessionList.find((pp) => pp.professionId === professionId);
    return found ? true : false;
  }

}
