import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommitteeService } from 'src/app/dashboard/services/committee/committee.service';
import { HealthcareService } from 'src/app/dashboard/services/healthcare/healthcare.service';
import { HobbyService } from 'src/app/dashboard/services/hobby/hobby.service';
import { ParameterService } from 'src/app/dashboard/services/parameter/parameter.service';
import { ProfessionService } from 'src/app/dashboard/services/profession/profession.service';
import { AdminModel } from 'src/app/shared/models/admin.model';
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
  getRoleListSuccess
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

  getDocumentTypeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getDocumentTypeList),
      mergeMap(() => this.parameterService.getDocumentTypeList().pipe(
        map((res: DocumentType[]) => getDocumentTypeListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getDocumentTypeListFailure({ error })))
      ))
    );
  });

  getRoleList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getRoleList),
      mergeMap(() => this.parameterService.getRoleList().pipe(
        map((res: Role[]) => getRoleListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getRoleListFailure({ error })))
      ))
    );
  });

  getGenderList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGenderList),
      mergeMap(() => this.parameterService.getGenderList().pipe(
        map((res: Gender[]) => getGenderListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getGenderListFailure({ error })))
      ))
    );
  });

  getHealthcareTypeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getHealthcareTypeList),
      mergeMap(() => this.parameterService.getHealthcareTypeList().pipe(
        map((res: HealthcareType[]) => getHealthcareTypeListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getHealthcareTypeListFailure({ error })))
      ))
    );
  });

  getAcademicLevelList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAcademicLevelList),
      mergeMap(() => this.parameterService.getAcademicLevelList().pipe(
        map((res: AcademicLevel[]) => getAcademicLevelListSuccess({ data: [ ...res ] })),
        catchError((error) => throwError(getAcademicLevelListFailure({ error })))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    public committeeService: CommitteeService,
    public healthcareService: HealthcareService,
    public hobbyService: HobbyService,
    public professionService: ProfessionService,
    public parameterService: ParameterService,
  ) {}

}
