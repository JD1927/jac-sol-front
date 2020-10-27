import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_PROFESSION } from 'src/app/shared/global/global.constants';
import { AdminModel } from 'src/app/shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private http: HttpClient) { }

  getProfessionList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(URL_PROFESSION);
  }

  createProfession(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(URL_PROFESSION, { name });
  }

  updateProfession(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${URL_PROFESSION}/${id}`, { name });
  }

  deleteProfession(id: number): Observable<void> {
    return this.http.delete<void>(`${URL_PROFESSION}/${id}`);
  }
}
