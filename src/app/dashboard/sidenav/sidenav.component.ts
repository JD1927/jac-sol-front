import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SidenavService } from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  onHome(): void {
    this.router.navigate(['/dashboard']);
  }

  onCommittee(): void {
    this.router.navigate(['/dashboard/committee']);
  }

}
