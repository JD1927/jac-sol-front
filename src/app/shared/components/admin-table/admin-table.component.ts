import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminModel } from './../../models/admin.model';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AdminModel>;

  @Input() adminDataSource: AdminModel[] = [];
  @Output() updateAdminItem = new EventEmitter<AdminModel>();
  @Output() deleteAdminItem = new EventEmitter<number>();

  dataSource: MatTableDataSource<AdminModel> = new MatTableDataSource<AdminModel>([]);
  displayedColumns: string[] = ['id', 'name', 'actions'];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<AdminModel>(this.adminDataSource);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  adminTableFilter(filterValue: Event): void {
    const { value } = (filterValue.target as HTMLInputElement);
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onUpdateAdminItem(item: AdminModel): void {
    const found = this.adminDataSource.find((adminItem) => adminItem.id === item.id);
    this.updateAdminItem.emit(found);
  }

  onDeleteAdminItem(item: AdminModel): void {
    const found = this.adminDataSource.find((adminItem) => adminItem.id === item.id);
    this.deleteAdminItem.emit(found?.id);
  }
}
