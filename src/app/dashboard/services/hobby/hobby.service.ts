import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_HOBBY } from 'src/app/shared/global/global.constants';
import { AdminModel } from 'src/app/shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private http: HttpClient) { }

  getHobbyList(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(URL_HOBBY);
  }

  createHobby(name: string): Observable<AdminModel> {
    return this.http.post<AdminModel>(URL_HOBBY, { name });
  }

  updateHobby(item: AdminModel): Observable<AdminModel> {
    const { id, name } = item;
    return this.http.patch<AdminModel>(`${URL_HOBBY}/${id}`, { name });
  }

  deleteHobby(id: number): Observable<void> {
    return this.http.delete<void>(`${URL_HOBBY}/${id}`);
  }
}
