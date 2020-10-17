import { createAction, props } from '@ngrx/store';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ErrorModel } from 'src/app/shared/models/error.model';

export const getCommitteeList = createAction(
  '[Admin] Get Committee List'
);

export const getCommitteeListSuccess = createAction(
  '[Admin] Get Committee List Success',
  props<{ data: AdminModel[] }>()
);

export const getCommitteeListFailure = createAction(
  '[Admin] Get Committee List Failure',
  props<{ error: ErrorModel }>()
);

export const getHealthcareList = createAction(
  '[Admin] Get Healthcare List'
);

export const getHealthcareListSuccess = createAction(
  '[Admin] Get Healthcare List Success',
  props<{ data: AdminModel[] }>()
);

export const getHealthcareListFailure = createAction(
  '[Admin] Get Healthcare List Failure',
  props<{ error: ErrorModel }>()
);

export const getHobbyList = createAction(
  '[Admin] Get Hobby List'
);

export const getHobbyListSuccess = createAction(
  '[Admin] Get Hobby List Success',
  props<{ data: AdminModel[] }>()
);

export const getHobbyListFailure = createAction(
  '[Admin] Get Hobby List Failure',
  props<{ error: ErrorModel }>()
);

export const getProfessionList = createAction(
  '[Admin] Get Profession List'
);

export const getProfessionListSuccess = createAction(
  '[Admin] Get Profession List Success',
  props<{ data: AdminModel[] }>()
);

export const getProfessionListFailure = createAction(
  '[Admin] Get Profession List Failure',
  props<{ error: ErrorModel }>()
);
