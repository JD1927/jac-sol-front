import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminModel } from '../../models/admin.model';

@Component({
  selector: 'app-new-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {

  description = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<AdminItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, item?: AdminModel }
  ) { }

  ngOnInit(): void {
    this.setDescription();
  }

  setDescription(): void {
    if (this.data?.item) {
      const { item } = this.data;
      this.description.setValue(item?.name);
    }
  }

  getDescription(): string | undefined {
    if (this.description.valid) {
      const { value } = this.description;
      return value;
    }
    return undefined;
  }
}
