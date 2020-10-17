import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Person } from 'src/app/shared/models/person.model';
import { getAllPeopleList } from 'src/app/store/actions/person/person.actions';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { PersonState } from 'src/app/store/reducers/person/person.reducer';

@Component({
  selector: 'app-person-content',
  templateUrl: './person-content.component.html',
  styleUrls: ['./person-content.component.scss']
})
export class PersonContentComponent implements OnInit, OnDestroy {

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
