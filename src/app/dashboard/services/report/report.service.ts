import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlMembersReport, urlAllPeopleReport } from 'src/app/shared/global/global.constants';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllMembersReport(): Observable<void> {
    return this.http.get<void>(urlMembersReport);
  }

  getAllPeopleReport(): Observable<void> {
    return this.http.get<void>(urlAllPeopleReport);
  }
}
