import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_MEMBERS_BY_COMMITTEE, URL_PEOPLE_BY_ROLE } from './../../../shared/global/global.constants';
import { PersonByRole, MemberByCommittee } from './../../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getMembersByCommittee(): Observable<MemberByCommittee[]> {
    return this.http.get<MemberByCommittee[]>(URL_MEMBERS_BY_COMMITTEE);
  }

  getPeopleByRole(): Observable<PersonByRole[]> {
    return this.http.get<PersonByRole[]>(URL_PEOPLE_BY_ROLE);
  }
}
