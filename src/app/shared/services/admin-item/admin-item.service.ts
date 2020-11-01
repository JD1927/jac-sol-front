import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminItemComponent } from '../../components/admin-item/admin-item.component';
import { AdminModel } from '../../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminItemService {

  isOpen!: boolean;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AdminItemComponent>
  ) {}

  openAdminItemModal(title: string, item?: AdminModel): void {
    if (!this.isOpen) {
      const dialogRef = this.dialog.open(AdminItemComponent,
        {
          data: { title, item },
          width: '400px',
          disableClose: true
        });
      this.isOpen = true;
      this.dialogRef = dialogRef;
      this.closeAdminItem(dialogRef);
    }
  }

  closeAdminItem(dialogRef: MatDialogRef<AdminItemComponent>): void {
    dialogRef.afterClosed().subscribe(() => this.isOpen = false);
  }
}
