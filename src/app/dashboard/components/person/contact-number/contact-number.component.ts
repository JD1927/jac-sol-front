import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactNumberService } from 'src/app/dashboard/services/contact-number/contact-number.service';
import { ModalType } from 'src/app/shared/models/error.model';
import { ContactNumber } from 'src/app/shared/models/person.model';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';

@Component({
  selector: 'app-contact-number',
  templateUrl: './contact-number.component.html',
  styleUrls: ['./contact-number.component.scss']
})
export class ContactNumberComponent implements OnInit {

  contactNumberForm!: FormGroup;
  contactNumberList: ContactNumber[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private contactNumberService: ContactNumberService,
    private alertService: AlertModalService,
    @Inject(MAT_DIALOG_DATA) public data: { personId: number }
  ) { }

  ngOnInit(): void {
    this.createContactNumber();
    this.getContactNumberList();
  }

  createContactNumber(): void {
    this.contactNumberForm = this.fb.group({
      number: ['',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
          Validators.pattern(/^([0-9\s]+)$/)
        ]
      ]
    });
  }

  getContactNumberList(): void {
    const { personId } = this.data;
    this.isLoading = true;
    this.contactNumberService.getContactNumberList(personId).subscribe(
      (res) => this.contactNumberList = [...res],
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
      () => this.isLoading = false
    );
  }

  onAddNumber(): void {
    if (this.contactNumberForm.valid) {
      const { number: contactNumber } = this.contactNumberForm.controls;
      const { personId } = this.data;
      this.contactNumberService.addContactNumber({ personId, contactNumber: contactNumber.value })
        .subscribe(
          () => {
            this.getContactNumberList();
            this.contactNumberForm.reset();
          },
          (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
        );
    }
  }

  onDeleteNumber(contactNumber: string): void {
    const { personId } = this.data;
    this.contactNumberService.deleteContactNumber(personId, contactNumber).subscribe(
      () => this.getContactNumberList(),
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR),
    );
  }

}
