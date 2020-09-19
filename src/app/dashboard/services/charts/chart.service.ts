import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlMembersByCommittee } from './../../../shared/global/global.constants';
import { MemberByCommittee } from './../../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getMembersByCommittee(): Observable<MemberByCommittee[]> {
    return this.http.get<MemberByCommittee[]>(urlMembersByCommittee);
  }
}
