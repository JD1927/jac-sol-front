import { createAction } from '@ngrx/store';
import { AdminState } from './admin/admin.reducer';
import { PersonState } from './person/person.reducer';

export const clearState = createAction(
  '[App State] Clear store'
);

export interface AppState {
  adminState?: AdminState;
  personState?: PersonState;
}

export const initialState: AppState = {
  adminState: undefined,
  personState: undefined,
};
