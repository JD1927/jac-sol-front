import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from 'src/app/shared/models/person.model';
import { AppState } from 'src/app/store/reducers/app.reducer';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit, OnDestroy {

  personState$: Subscription = new Subscription();
  selectedPerson!: Person;

  constructor(
    public store: Store<AppState>,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getSelectedPerson();
  }

  ngOnDestroy(): void {
    this.personState$.unsubscribe();
  }

  getSelectedPerson(): void {
    this.personState$ = this.store.select(state => state.personState?.selectedPerson)
    .pipe(
      tap((person: Person | undefined) => {
        if (person) {
          this.selectedPerson = { ...person };
        } else {
          this.router.navigate(['/dashboard/people']);
        }
      })
    )
    .subscribe();
  }

}
