import { createAction, props } from '@ngrx/store';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { AcademicLevel, DocumentType, Gender, HealthcareType, Role } from 'src/app/shared/models/person.model';

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

export const getDocumentTypeList = createAction(
  '[Admin] Get Role List'
);

export const getDocumentTypeListSuccess = createAction(
  '[Admin] Get Document Type List Success',
  props<{ data: DocumentType[] }>()
);

export const getDocumentTypeListFailure = createAction(
  '[Admin] Get Document Type List Failure',
  props<{ error: ErrorModel }>()
);

export const getRoleList = createAction(
  '[Admin] Get Role List'
);

export const getRoleListSuccess = createAction(
  '[Admin] Get Role List Success',
  props<{ data: Role[] }>()
);

export const getRoleListFailure = createAction(
  '[Admin] Get Role List Failure',
  props<{ error: ErrorModel }>()
);

export const getGenderList = createAction(
  '[Admin] Get Gender List'
);

export const getGenderListSuccess = createAction(
  '[Admin] Get Gender List Success',
  props<{ data: Gender[] }>()
);

export const getGenderListFailure = createAction(
  '[Admin] Get Gender List Failure',
  props<{ error: ErrorModel }>()
);

export const getHealthcareTypeList = createAction(
  '[Admin] Get Healthcare Type List'
);

export const getHealthcareTypeListSuccess = createAction(
  '[Admin] Get Healthcare Type List Success',
  props<{ data: HealthcareType[] }>()
);

export const getHealthcareTypeListFailure = createAction(
  '[Admin] Get Healthcare Type List Failure',
  props<{ error: ErrorModel }>()
);

export const getAcademicLevelList = createAction(
  '[Admin] Get Academic Level List'
);

export const getAcademicLevelListSuccess = createAction(
  '[Admin] Get Academic Level List Success',
  props<{ data: AcademicLevel[] }>()
);

export const getAcademicLevelListFailure = createAction(
  '[Admin] Get Academic Level List Failure',
  props<{ error: ErrorModel }>()
);
