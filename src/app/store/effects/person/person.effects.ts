import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PersonService } from 'src/app/dashboard/services/person/person.service';
import { Person } from 'src/app/shared/models/person.model';
import { getAllPeopleList, getAllPeopleListFailure, getAllPeopleListSuccess } from '../../actions/person/person.actions';



@Injectable()
export class PersonEffects {

  getAllPeopleList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllPeopleList),
      mergeMap(() => this.personService.getAllPeopleList().pipe(
        map((res: Person[]) => getAllPeopleListSuccess({ personList: [ ...res ] })),
        catchError((error) => throwError(getAllPeopleListFailure({ error })))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) {}

}
