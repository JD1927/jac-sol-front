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
import { ProfessionService } from '../../services/profession/profession.service';
import { getProfessionList } from './../../../store/actions/admin/admin.actions';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class ProfessionComponent implements OnInit, OnDestroy {

  public professionList!: AdminModel[];
  isLoadedData = false;
  getProfessionList$: Subscription = new Subscription();

  constructor(
    private professionService: ProfessionService,
    private adminItemService: AdminItemService,
    private alertService: AlertModalService,
    private confirmService: ConfirmModalService,
    public store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.getProfessionList();
  }

  ngOnDestroy(): void {
    this.getProfessionList$.unsubscribe();
  }

  getProfessionList(): void {
    this.isLoadedData = false;
    this.store.dispatch(getProfessionList());
    this.getProfessionList$ = this.store.select(state => state.adminState)
      .pipe(
        delay(200),
        tap((adminState: AdminState | undefined) => {
          this.professionList = [];
          if (adminState?.professionList && (adminState?.professionList?.length > 0 || adminState?.professionList?.length === 0)) {
            this.professionList = [...adminState.professionList];
            this.isLoadedData = true;
          }
        })
      )
      .subscribe();
  }

  onCreateProfession(): void {
    this.adminItemService.openAdminItemModal('Nueva Profesión');
    this.afterNewProfessionClosed();
  }

  afterNewProfessionClosed(): void {
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (name: string) => {
        if (name) { this.createProfession(name); }
      }
    );
  }

  createProfession(name: string): void {
    this.professionService.createProfession(name).subscribe(
      () => this.getProfessionList()
    );
  }

  onUpdateProfession(item: AdminModel): void {
    this.adminItemService.openAdminItemModal(`Actualizar Profesión: ${item?.id}`, item);
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (newName: string) => {
        if (newName) { this.updateProfessionById(item, newName); }
      }
    );
  }

  updateProfessionById(item: AdminModel, newName: string): void {
    this.professionService.updateProfession({ ...item, name: newName }).subscribe(
      () => this.getProfessionList()
    );
  }

  onDeleteProfession(id: number): void {
    this.confirmService.openConfirmModal(`¿Estás seguro que deseas eliminar la Profesión con ID: '${id}' ?`);
    const { dialogRef } = this.confirmService;
    dialogRef.afterClosed().subscribe(
      (res: boolean) => {
        if (res) { this.deleteProfessionById(id); }
      }
    );
  }

  deleteProfessionById(id: number): void {
    this.professionService.deleteProfession(id).subscribe(
      () => this.getProfessionList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR)
    );
  }

}
