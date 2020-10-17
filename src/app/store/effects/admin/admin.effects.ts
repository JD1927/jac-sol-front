import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommitteeService } from 'src/app/dashboard/services/committee/committee.service';
import { HealthcareService } from 'src/app/dashboard/services/healthcare/healthcare.service';
import { HobbyService } from 'src/app/dashboard/services/hobby/hobby.service';
import { ProfessionService } from 'src/app/dashboard/services/profession/profession.service';
import { AdminModel } from 'src/app/shared/models/admin.model';
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
  getProfessionListSuccess
} from '../../actions/admin/admin.actions';


@Injectable()
export class AdminEffects {

  getCommitteeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCommitteeList),
      mergeMap(() => this.committeeService.getCommitteeList().pipe(
        map((res: AdminModel[]) => getCommitteeListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getCommitteeListFailure({ error })))
      ))
    );
  });

  getHealthcareList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getHealthcareList),
      mergeMap(() => this.healthcareService.getHealthcareList().pipe(
        map((res: AdminModel[]) => getHealthcareListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getHealthcareListFailure({ error })))
      ))
    );
  });

  getHobbyList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getHobbyList),
      mergeMap(() => this.hobbyService.getHobbyList().pipe(
        map((res: AdminModel[]) => getHobbyListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getHobbyListFailure({ error })))
      ))
    );
  });

  getProfessionList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProfessionList),
      mergeMap(() => this.professionService.getProfessionList().pipe(
        map((res: AdminModel[]) => getProfessionListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getProfessionListFailure({ error })))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    public committeeService: CommitteeService,
    public healthcareService: HealthcareService,
    public hobbyService: HobbyService,
    public professionService: ProfessionService
  ) {}

}
