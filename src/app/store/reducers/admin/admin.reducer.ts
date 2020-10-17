import { Action, createReducer, on } from '@ngrx/store';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ErrorModel } from 'src/app/shared/models/error.model';
import {
  getCommitteeList,
  getCommitteeListFailure,
  getCommitteeListSuccess,
  getHealthcareList,
  getHealthcareListFailure,
  getHealthcareListSuccess,
  getHobbyList,
  getHobbyListFailure,
  getHobbyListSuccess,
  getProfessionList,
  getProfessionListFailure,
  getProfessionListSuccess,
} from './../../actions/admin/admin.actions';


export const adminFeatureKey = 'admin';

export interface AdminState {
  committeeList?: AdminModel[];
  healthcareList?: AdminModel[];
  hobbyList?: AdminModel[];
  professionList?: AdminModel[];
  error?: ErrorModel;
}

export const initialState: AdminState = {
  committeeList: undefined,
  healthcareList: undefined,
  hobbyList: undefined,
  professionList: undefined,
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
);

