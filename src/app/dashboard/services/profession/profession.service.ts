import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlProfession } from 'src/app/shared/global/global.constants';
import { AdminModel } from 'src/app/shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private http: HttpClient) { }

  getProfessionList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(urlProfession);
  }

  createProfession(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(urlProfession, { name });
  }

  updateProfession(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${urlProfession}/${id}`, { name });
  }

  deleteProfession(id: number): Observable<void> {
    return this.http.delete<void>(`${urlProfession}/${id}`);
  }
}
