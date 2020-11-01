import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { URL_HEALTHCARE } from './../../../shared/global/global.constants';

@Injectable({
  providedIn: 'root'
})
export class HealthcareService {

  constructor(private http: HttpClient) { }

  getHealthcareList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(URL_HEALTHCARE);
  }

  createHealthcare(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(URL_HEALTHCARE, { name });
  }

  updateHealthcare(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${URL_HEALTHCARE}/${id}`, { name });
  }

  deleteHealthcare(id: number): Observable<void> {
    return this.http.delete<void>(`${URL_HEALTHCARE}/${id}`);
  }
}
