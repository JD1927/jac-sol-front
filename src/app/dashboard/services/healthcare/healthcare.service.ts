import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { urlHealthcare } from './../../../shared/global/global.constants';

@Injectable({
  providedIn: 'root'
})
export class HealthcareService {

  constructor(private http: HttpClient) { }

  getHealthcareList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(urlHealthcare);
  }

  createHealthcare(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(urlHealthcare, { name });
  }

  updateHealthcare(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${urlHealthcare}/${id}`, { name });
  }

  deleteHealthcare(id: number): Observable<void> {
    return this.http.delete<void>(`${urlHealthcare}/${id}`);
  }
}
