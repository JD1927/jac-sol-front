import { Component, OnInit } from '@angular/core';
import { MemberByCommittee, PersonByRole } from '../../models/chart.model';
import { ChartService } from './../../services/charts/chart.service';
import { Label, SingleDataSet } from 'ng2-charts';
import { ReportService } from '../../services/report/report.service';


@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  committeeLabels: Label[] = [];
  committeeDataSet: SingleDataSet = [];
  roleLabels: Label[] = [];
  roleDataSet: SingleDataSet = [];

  constructor(
    private chartService: ChartService,
    private reportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.getMembersByCommittee();
    this.getPeopleByRole();
  }

  getMembersByCommittee(): void {
    this.chartService.getMembersByCommittee().subscribe(
      (membersByCommittee: MemberByCommittee[]) => {
        membersByCommittee.forEach((committee: MemberByCommittee) => {
          this.committeeLabels.push(committee.committeeName);
          this.committeeDataSet.push(committee.memberList);
        });
      },
      (err) => console.error(err)
    );
  }

  getPeopleByRole(): void {
    this.chartService.getPeopleByRole().subscribe(
      (personByRole: PersonByRole[]) => {
        personByRole.forEach((person: PersonByRole) => {
          this.roleLabels.push(person.roleName);
          this.roleDataSet.push(person.peopleList);
        });
      },
    );
  }

  onMembersReport(): void {
    this.reportService.getAllMembersReport().subscribe((res) => {
      console.log(res);
    });
  }

}
