import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AdminModel } from 'src/app/shared/models/admin.model';
import { ModalType } from 'src/app/shared/models/error.model';
import { AdminItemService } from 'src/app/shared/services/admin-item/admin-item.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';
import { ConfirmModalService } from 'src/app/shared/services/confirm-modal/confirm-modal.service';
import { getHealthcareList } from './../../../store/actions/admin/admin.actions';
import { AdminState } from 'src/app/store/reducers/admin/admin.reducer';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { HealthcareService } from '../../services/healthcare/healthcare.service';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.scss']
})
export class HealthcareComponent implements OnInit, OnDestroy {

  public healthcareList!: AdminModel[];
  isLoadedData = false;
  getHealthcareList$: Subscription = new Subscription();

  constructor(
    private healthcareService: HealthcareService,
    private adminItemService: AdminItemService,
    private alertService: AlertModalService,
    private confirmService: ConfirmModalService,
    public store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.getHealthcareList();
  }

  ngOnDestroy(): void {
    this.getHealthcareList$.unsubscribe();
  }

  getHealthcareList(): void {
    this.isLoadedData = false;
    this.store.dispatch(getHealthcareList());
    this.getHealthcareList$ = this.store.select(state => state.adminState)
      .pipe(
        delay(200),
        tap((adminState: AdminState | undefined) => {
          this.healthcareList = [];
          if (adminState?.healthcareList && (adminState?.healthcareList.length > 0 || adminState?.healthcareList?.length === 0)) {
            this.healthcareList = [...adminState.healthcareList];
            this.isLoadedData = true;
          }
        })
      )
      .subscribe();
  }

  onCreateHealthcare(): void {
    this.adminItemService.openAdminItemModal('Nueva Entidad Promotora de Salud');
    this.afterNewHealthcareClosed();
  }

  afterNewHealthcareClosed(): void {
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (name: string) => {
        if (name) { this.createHealthcare(name); }
      }
    );
  }

  createHealthcare(name: string): void {
    this.healthcareService.createHealthcare(name).subscribe(
      () => this.getHealthcareList()
    );
  }

  onUpdateHealthcare(item: AdminModel): void {
    this.adminItemService.openAdminItemModal(`Actualizar Entidad Promotora de Salud: ${item?.id}`, item);
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (newName: string) => {
        if (newName) { this.updateHealthcareById(item, newName); }
      }
    );
  }

  updateHealthcareById(item: AdminModel, newName: string): void {
    this.healthcareService.updateHealthcare({ ...item, name: newName }).subscribe(
      () => this.getHealthcareList()
    );
  }

  onDeleteHealthcare(id: number): void {
    this.confirmService.openConfirmModal(`¿Estás seguro que deseas eliminar la Entidad Promotora de Salud con ID: '${id}' ?`);
    const { dialogRef } = this.confirmService;
    dialogRef.afterClosed().subscribe(
      (res: boolean) => {
        if (res) { this.deleteHealthcareById(id); }
      }
    );
  }

  deleteHealthcareById(id: number): void {
    this.healthcareService.deleteHealthcare(id).subscribe(
      () => this.getHealthcareList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR)
    );
  }

}
