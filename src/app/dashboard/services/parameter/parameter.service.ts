import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_ACADEMIC_LEVEL, URL_DOCUMENT_TYPE, URL_GENDER, URL_HEALTHCARE_TYPE, URL_ROLE } from 'src/app/shared/global/global.constants';
import { AcademicLevel, DocumentType, Gender, HealthcareType, Role } from 'src/app/shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(private http: HttpClient) { }

  getDocumentTypeList(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(URL_DOCUMENT_TYPE);
  }

  getRoleList(): Observable<Role[]> {
    return this.http.get<Role[]>(URL_ROLE);
  }

  getGenderList(): Observable<Gender[]> {
    return this.http.get<Gender[]>(URL_GENDER);
  }

  getHealthcareTypeList(): Observable<HealthcareType[]> {
    return this.http.get<HealthcareType[]>(URL_HEALTHCARE_TYPE);
  }

  getAcademicLevelList(): Observable<AcademicLevel[]> {
    return this.http.get<AcademicLevel[]>(URL_ACADEMIC_LEVEL);
  }
}
