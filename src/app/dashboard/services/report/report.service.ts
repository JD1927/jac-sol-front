import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_MEMBERS_REPORT, URL_ALL_PEOPLE_REPORT } from 'src/app/shared/global/global.constants';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllMembersReport(): Observable<void> {
    return this.http.get<void>(URL_MEMBERS_REPORT);
  }

  getAllPeopleReport(): Observable<void> {
    return this.http.get<void>(URL_ALL_PEOPLE_REPORT);
  }
}
