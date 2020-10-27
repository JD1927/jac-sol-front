import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PersonService } from 'src/app/dashboard/services/person/person.service';
import { getAllPeopleList, saveSelectedPerson } from 'src/app/store/actions/person/person.actions';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { ModalType } from '../../models/error.model';
import { Person, PersonStatus } from '../../models/person.model';
import { AlertModalService } from '../../services/alert-modal/alert-modal.service';
import { ConfirmModalService } from '../../services/confirm-modal/confirm-modal.service';

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
    public router: Router,
    private confirmService: ConfirmModalService,
    private alertModal: AlertModalService,
    private personService: PersonService,
  ) { }

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
    this.store.dispatch(saveSelectedPerson({ person, status: PersonStatus.UPDATE }));
    this.router.navigate(['/dashboard/people/form']);
  }

  onDeletePersonDetail(person: Person): void {
    const { documentId, documentType, id } = person;
    this.confirmService.openConfirmModal(`¿Estás seguro que deseas eliminar a la persona
    con ID: '${documentType?.nameCode}-${documentId}' ?`);
    const { dialogRef } = this.confirmService;
    dialogRef.afterClosed().subscribe(
      (res: boolean) => {
        if (res) { this.onDeletePersonById(id); }
      }
    );
  }

  onDeletePersonById(personId: number | undefined): void {
    if (personId) {
      this.personService.deletePerson(personId).subscribe(
        () => this.store.dispatch(getAllPeopleList()),
        (err) => this.alertModal.openErrorModal(err.error, ModalType.ERROR)
      );
    }
  }

}
