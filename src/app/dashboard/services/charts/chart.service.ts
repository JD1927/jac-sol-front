import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlMembersByCommittee, urlPeopleByRole } from './../../../shared/global/global.constants';
import { PersonByRole, MemberByCommittee } from './../../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getMembersByCommittee(): Observable<MemberByCommittee[]> {
    return this.http.get<MemberByCommittee[]>(urlMembersByCommittee);
  }

  getPeopleByRole(): Observable<PersonByRole[]> {
    return this.http.get<PersonByRole[]>(urlPeopleByRole);
  }
}
