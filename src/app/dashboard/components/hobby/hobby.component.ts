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
import { HobbyService } from '../../services/hobby/hobby.service';
import { getHobbyList } from './../../../store/actions/admin/admin.actions';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit, OnDestroy {

  public hobbyList!: AdminModel[];
  isLoadedData = false;
  getHobbyList$: Subscription = new Subscription();

  constructor(
    private hobbyService: HobbyService,
    private adminItemService: AdminItemService,
    private alertService: AlertModalService,
    private confirmService: ConfirmModalService,
    public store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.getHobbyList();
  }

  ngOnDestroy(): void {
    this.getHobbyList$.unsubscribe();
  }

  getHobbyList(): void {
    this.isLoadedData = false;
    this.store.dispatch(getHobbyList());
    this.getHobbyList$ = this.store.select(state => state.adminState)
      .pipe(
        delay(200),
        tap((adminState: AdminState | undefined) => {
          this.hobbyList = [];
          if (adminState?.hobbyList && (adminState?.hobbyList.length > 0 || adminState?.hobbyList?.length === 0)) {
            this.hobbyList = [...adminState.hobbyList];
            this.isLoadedData = true;
          }
        })
      )
      .subscribe();
  }

  onCreateHobby(): void {
    this.adminItemService.openAdminItemModal('Nuevo Hobby');
    this.afterNewHobbyClosed();
  }

  afterNewHobbyClosed(): void {
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (name: string) => {
        if (name) { this.createHobby(name); }
      }
    );
  }

  createHobby(name: string): void {
    this.hobbyService.createHobby(name).subscribe(
      () => this.getHobbyList()
    );
  }

  onUpdateHobby(item: AdminModel): void {
    this.adminItemService.openAdminItemModal(`Actualizar Hobby: ${item?.id}`, item);
    const { dialogRef } = this.adminItemService;
    dialogRef.afterClosed().subscribe(
      (newName: string) => {
        if (newName) { this.updateHobbyById(item, newName); }
      }
    );
  }

  updateHobbyById(item: AdminModel, newName: string): void {
    this.hobbyService.updateHobby({ ...item, name: newName }).subscribe(
      () => this.getHobbyList()
    );
  }

  onDeleteHobby(id: number): void {
    this.confirmService.openConfirmModal(`¿Estás seguro que deseas eliminar el Hobby con ID: '${id}' ?`);
    const { dialogRef } = this.confirmService;
    dialogRef.afterClosed().subscribe(
      (res: boolean) => {
        if (res) { this.deleteHobbyById(id); }
      }
    );
  }

  deleteHobbyById(id: number): void {
    this.hobbyService.deleteHobby(id).subscribe(
      () => this.getHobbyList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR)
    );
  }

}
