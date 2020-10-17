import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../../components/confim-modal/confim-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  isOpen!: boolean;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
  ) {}

  openConfirmModal(message: string): void {
    if (!this.isOpen) {
      const dialogRef = this.dialog.open(ConfirmModalComponent,
        {
          data: { message },
          width: '400px',
          disableClose: true
        });
      this.isOpen = true;
      this.dialogRef = dialogRef;
      this.closeAdminItem(dialogRef);
    }
  }

  closeAdminItem(dialogRef: MatDialogRef<ConfirmModalComponent>): void {
    dialogRef.afterClosed().subscribe(() => this.isOpen = false);
  }
}
