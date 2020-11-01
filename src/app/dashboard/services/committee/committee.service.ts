import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_COMMITTEE } from 'src/app/shared/global/global.constants';
import { AdminModel } from 'src/app/shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  constructor(private http: HttpClient) { }

  getCommitteeList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(URL_COMMITTEE);
  }

  createCommittee(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(URL_COMMITTEE, { name });
  }

  updateCommittee(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${URL_COMMITTEE}/${id}`, { name });
  }

  deleteCommittee(id: number): Observable<void> {
    return this.http.delete<void>(`${URL_COMMITTEE}/${id}`);
  }
}
