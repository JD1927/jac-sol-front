import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  getAcademicLevelList,
  getCommitteeList,
  getDocumentTypeList,
  getGenderList,
  getHealthcareList,
  getHealthcareTypeList,
  getRoleList
} from 'src/app/store/actions/admin/admin.actions';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { PersonState } from 'src/app/store/reducers/person/person.reducer';
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
    this.getParameters();
  }

  ngOnDestroy(): void {
    this.getPersonList$.unsubscribe();
  }

  getPersonList(): void {
    this.isLoadedData = false;
    this.store.dispatch(getAllPeopleList());
    this.getPersonList$ = this.store.select(state => state.personState)
      .pipe(
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

  getParameters(): void {
    this.store.dispatch(getDocumentTypeList());
    this.store.dispatch(getRoleList());
    this.store.dispatch(getGenderList());
    this.store.dispatch(getHealthcareTypeList());
    this.store.dispatch(getHealthcareList());
    this.store.dispatch(getAcademicLevelList());
    this.store.dispatch(getCommitteeList());
  }
}
