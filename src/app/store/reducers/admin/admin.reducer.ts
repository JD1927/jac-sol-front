import { Action, createReducer, on } from '@ngrx/store';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { AcademicLevel, DocumentType, Gender, HealthcareType, Role } from 'src/app/shared/models/person.model';
import {
  getAcademicLevelList,
  getAcademicLevelListFailure,
  getAcademicLevelListSuccess,
  getCommitteeList,
  getCommitteeListFailure,
  getCommitteeListSuccess,
  getDocumentTypeList,
  getDocumentTypeListFailure,
  getDocumentTypeListSuccess,
  getGenderList,
  getGenderListFailure,
  getGenderListSuccess,
  getHealthcareList,
  getHealthcareListFailure,
  getHealthcareListSuccess,
  getHealthcareTypeList,
  getHealthcareTypeListFailure,
  getHealthcareTypeListSuccess,
  getHobbyList,
  getHobbyListFailure,
  getHobbyListSuccess,
  getProfessionList,
  getProfessionListFailure,
  getProfessionListSuccess,
  getRoleList,
  getRoleListFailure,
  getRoleListSuccess,
} from './../../actions/admin/admin.actions';


export const adminFeatureKey = 'admin';

export interface AdminState {
  committeeList?: AdminModel[];
  healthcareList?: AdminModel[];
  hobbyList?: AdminModel[];
  professionList?: AdminModel[];
  documentTypeList?: DocumentType[];
  roleList?: Role[];
  genderList?: Gender[];
  healthcareTypeList?: HealthcareType[];
  academicLevelList?: AcademicLevel[];
  error?: ErrorModel;
}

export const initialState: AdminState = {
  committeeList: undefined,
  healthcareList: undefined,
  hobbyList: undefined,
  professionList: undefined,
  documentTypeList: undefined,
  roleList: undefined,
  genderList: undefined,
  academicLevelList: undefined,
  error: undefined,
};


export const adminReducer = createReducer(initialState,
  on(getCommitteeList, (state) => {
    return {
      ...state,
      committeeList: undefined
    };
  }),
  on(getCommitteeListSuccess, (state, action) => {
    return {
      ...state,
      committeeList: [ ...action.data ]
    };
  }),
  on(getCommitteeListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getHealthcareList, (state) => {
    return {
      ...state,
      healthcareList: undefined
    };
  }),
  on(getHealthcareListSuccess, (state, action) => {
    return {
      ...state,
      healthcareList: [ ...action.data ]
    };
  }),
  on(getHealthcareListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getHobbyList, (state) => {
    return {
      ...state,
      hobbyList: undefined
    };
  }),
  on(getHobbyListSuccess, (state, action) => {
    return {
      ...state,
      hobbyList: [ ...action.data ]
    };
  }),
  on(getHobbyListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getProfessionList, (state) => {
    return {
      ...state,
      professionList: undefined
    };
  }),
  on(getProfessionListSuccess, (state, action) => {
    return {
      ...state,
      professionList: [ ...action.data ]
    };
  }),
  on(getProfessionListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getDocumentTypeList, (state) => {
    return {
      ...state,
      documentTypeList: undefined
    };
  }),
  on(getDocumentTypeListSuccess, (state, action) => {
    return {
      ...state,
      documentTypeList: [ ...action.data ]
    };
  }),
  on(getDocumentTypeListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getRoleList, (state) => {
    return {
      ...state,
      roleList: undefined
    };
  }),
  on(getRoleListSuccess, (state, action) => {
    return {
      ...state,
      roleList: [ ...action.data ]
    };
  }),
  on(getRoleListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getGenderList, (state) => {
    return {
      ...state,
      genderList: undefined
    };
  }),
  on(getGenderListSuccess, (state, action) => {
    return {
      ...state,
      genderList: [ ...action.data ]
    };
  }),
  on(getGenderListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getHealthcareTypeList, (state) => {
    return {
      ...state,
      healthcareTypeList: undefined
    };
  }),
  on(getHealthcareTypeListSuccess, (state, action) => {
    return {
      ...state,
      healthcareTypeList: [ ...action.data ]
    };
  }),
  on(getHealthcareTypeListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(getAcademicLevelList, (state) => {
    return {
      ...state,
      academicLevelList: undefined
    };
  }),
  on(getAcademicLevelListSuccess, (state, action) => {
    return {
      ...state,
      academicLevelList: [ ...action.data ]
    };
  }),
  on(getAcademicLevelListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
);

