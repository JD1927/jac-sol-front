import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveSelectedPerson } from 'src/app/store/actions/person/person.actions';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Person>;

  @Input() personDataSource: Person[] = [];

  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>([]);
  displayedColumns: string[] = ['documentId', 'documentType', 'name', 'age', 'role', 'address', 'actions'];

  constructor(
    public store: Store<AppState>,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Person>(this.personDataSource);
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

  onShowPersonDetail(person: Person): void {
    this.store.dispatch(saveSelectedPerson({ person }));
    this.router.navigate(['/dashboard/people/detail']);
  }

  onDeletePersonDetail(person: Person): void {
  }

}
