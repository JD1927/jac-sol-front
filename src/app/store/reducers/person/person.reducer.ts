import { Action, createReducer, on } from '@ngrx/store';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { Person } from 'src/app/shared/models/person.model';
import {
  getAllPeopleList,
  getAllPeopleListFailure,
  getAllPeopleListSuccess,
  saveSelectedPerson
} from '../../actions/person/person.actions';


export const personFeatureKey = 'person';

export interface PersonState {
  personList?: Person[];
  selectedPerson?: Person;
  error?: ErrorModel;
}

export const initialState: PersonState = {
  personList: undefined,
  selectedPerson: undefined,
  error: undefined,
};


export const personReducer = createReducer(initialState,
  on(getAllPeopleList, (state) => {
    return {
      ...state,
      personList: undefined,
    };
  }),
  on(getAllPeopleListSuccess, (state, action) => {
    return {
      ...state,
      personList: [ ...action.personList ],
    };
  }),
  on(getAllPeopleListFailure, (state, action) => {
    return {
      ...state,
      error: { ...action.error }
    };
  }),
  on(saveSelectedPerson, (state, action) => {
    return {
      ...state,
      selectedPerson: { ...action.person }
    };
  }),
);

