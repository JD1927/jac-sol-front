import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlHobby } from 'src/app/shared/global/global.constants';
import { AdminModel } from 'src/app/shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private http: HttpClient) { }

  getHobbyList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(urlHobby);
  }

  createHobby(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(urlHobby, { name });
  }

  updateHobby(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${urlHobby}/${id}`, { name });
  }

  deleteHobby(id: number): Observable<void> {
    return this.http.delete<void>(`${urlHobby}/${id}`);
  }
}
