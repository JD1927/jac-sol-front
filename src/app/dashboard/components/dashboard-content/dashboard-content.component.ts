import { Component, OnInit } from '@angular/core';
import { MemberByCommittee } from '../../models/chart.model';
import { ChartService } from './../../services/charts/chart.service';
import { Label, SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  committeeLabels: Label[] = [];
  committeeDataSet: SingleDataSet = [];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.getMembersByCommittee();
  }

  getMembersByCommittee(): void {
    this.chartService.getMembersByCommittee().subscribe(
      (membersByCommittee: MemberByCommittee[]) => {
        membersByCommittee.forEach((committee) => {
          this.committeeLabels.push(committee.committeeName);
          this.committeeDataSet.push(committee.memberList);
        });
      },
      (err) => console.error(err)
    );
  }
}
