import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ModalType } from 'src/app/shared/models/error.model';
import { AdminItemService } from 'src/app/shared/services/admin-item/admin-item.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';
import { ConfirmModalService } from 'src/app/shared/services/confirm-modal/confirm-modal.service';
import { AdminState } from 'src/app/store/reducers/admin/admin.reducer';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { CommitteeService } from '../../services/committee/committee.service';
import { getCommitteeList } from './../../../store/actions/admin/admin.actions';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit, OnDestroy {

  public committeeList!: AdminModel[];
  isLoadedData = false;
  getCommitteeList$: Subscription = new Subscription();

  constructor(
    private committeeService: CommitteeService,
    private adminItemService: AdminItemService,
    private alertService: AlertModalService,
    private confirmService: ConfirmModalService,
    public store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.getCommitteList();
  }

  ngOnDestroy(): void {
    this.getCommitteeList$.unsubscribe();
  }

  getCommitteList(): void {
    this.isLoadedData = false;
    this.store.dispatch(getCommitteeList());
    this.getCommitteeList$ = this.store.select(state => state.adminState)
      .pipe(

        tap((adminState: AdminState | undefined) => {
          this.committeeList = [];
          if (adminState?.committeeList && (adminState?.committeeList?.length > 0 || adminState?.committeeList?.length === 0)) {
            this.committeeList = [...adminState.committeeList];
            this.isLoadedData = true;
          }
        })
      )
      .subscribe();
  }

  onCreateCommittee(): void {
    this.adminItemService.openAdminItemModal('Nuevo Comité');
    this.afterNewCommitteeClosed();
  }

  afterNewCommitteeClosed(): void {
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (name: string) => {
        if (name) { this.createCommittee(name); }
      }
    );
  }

  createCommittee(name: string): void {
    this.committeeService.createCommittee(name).subscribe(
      () => this.getCommitteList()
    );
  }

  onUpdateCommittee(item: AdminModel): void {
    this.adminItemService.openAdminItemModal(`Actualizar Comité: ${item?.id}`, item);
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (newName: string) => {
        if (newName) { this.updateCommitteeById(item, newName); }
      }
    );
  }

  updateCommitteeById(item: AdminModel, newName: string): void {
    this.committeeService.updateCommittee({ ...item, name: newName }).subscribe(
      () => this.getCommitteList()
    );
  }

  onDeleteCommittee(id: number): void {
    this.confirmService.openConfirmModal(`¿Estás seguro que deseas eliminar el Comité con ID: '${id}' ?`);
    const { dialogRef } = this.confirmService;
    dialogRef.afterClosed().subscribe(
      (res: boolean) => {
        if (res) { this.deleteCommitteeById(id); }
      }
    );
  }

  deleteCommitteeById(id: number): void {
    this.committeeService.deleteCommittee(id).subscribe(
      () => this.getCommitteList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR)
    );
  }

}
