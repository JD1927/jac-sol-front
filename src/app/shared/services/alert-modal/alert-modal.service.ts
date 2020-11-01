import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal.component';
import { ErrorModel, ModalType } from '../../models/error.model';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  isOpen!: boolean;

  constructor(
    public dialog: MatDialog
  ) { }

  openErrorModal(error: ErrorModel, type?: ModalType): void {
    if (!this.isOpen) {
      const dialogRef = this.dialog.open(AlertModalComponent,
        {
          data: { error, type },
          width: '400px',
          disableClose: true
        });
      this.isOpen = true;
      this.closeAlertModal(dialogRef);
    }
  }

  closeAlertModal(dialogRef: MatDialogRef<AlertModalComponent>): void {
    dialogRef.afterClosed().subscribe(() => this.isOpen = false);
  }
}
