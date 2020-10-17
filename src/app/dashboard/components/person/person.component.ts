import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';
import { ConfirmModalService } from 'src/app/shared/services/confirm-modal/confirm-modal.service';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { PersonState } from 'src/app/store/reducers/person/person.reducer';
import { PersonService } from '../../services/person/person.service';
import { Person } from './../../../shared/models/person.model';
import { getAllPeopleList } from './../../../store/actions/person/person.actions';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {

  public peopleList!: Person[];
  isLoadedData = false;
  getPersonList$: Subscription = new Subscription();

  constructor(
    public router: Router,
    public store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.getPersonList();
  }

  ngOnDestroy(): void {
    this.getPersonList$.unsubscribe();
  }

  getPersonList(): void {
    this.isLoadedData = false;
    this.store.dispatch(getAllPeopleList());
    this.getPersonList$ = this.store.select(state => state.personState)
      .pipe(
        delay(200),
        tap((personState: PersonState | undefined) => {
          this.peopleList = [];
          if (personState?.personList && (personState?.personList.length > 0 || personState?.personList?.length === 0)) {
            this.peopleList = [...personState.personList];
            this.isLoadedData = true;
          }
        })
      )
      .subscribe();
  }
}
