import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlCommittee } from 'src/app/shared/global/global.constants';
import { AdminModel } from 'src/app/shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  constructor(private http: HttpClient) { }

  getCommitteeList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(urlCommittee);
  }

  createCommittee(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(urlCommittee, { name });
  }

  updateCommittee(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${urlCommittee}/${id}`, { name });
  }

  deleteCommittee(id: number): Observable<void> {
    return this.http.delete<void>(`${urlCommittee}/${id}`);
  }
}
