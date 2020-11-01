import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorModel, ModalType } from '../../models/error.model';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  modalType = ModalType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { error: ErrorModel, type: ModalType }
  ) { }

  ngOnInit(): void {
  }

}
