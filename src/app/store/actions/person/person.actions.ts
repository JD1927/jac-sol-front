import { createAction, props } from '@ngrx/store';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { Person } from 'src/app/shared/models/person.model';

export const getAllPeopleList = createAction(
  '[Person] Get All People List'
);

export const getAllPeopleListSuccess = createAction(
  '[Person] Get All People List Success',
  props<{ personList: Person[] }>()
);

export const getAllPeopleListFailure = createAction(
  '[Person] Get All People List Failure',
  props<{ error: ErrorModel }>()
);


export const saveSelectedPerson = createAction(
  '[Person] Save Selected Person',
  props<{ person: Person }>()
);


