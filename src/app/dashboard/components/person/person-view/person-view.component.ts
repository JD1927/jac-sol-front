import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PersonService } from 'src/app/dashboard/services/person/person.service';
import { ModalType } from 'src/app/shared/models/error.model';
import { AcademicLevel, Committee, DocumentType, Gender, Healthcare, HealthcareType, Person, PersonRole, PersonStatus, Role } from 'src/app/shared/models/person.model';
import { AlertModalService } from 'src/app/shared/services/alert-modal/alert-modal.service';
import { resetSelectedPerson } from 'src/app/store/actions/person/person.actions';
import { AdminState } from 'src/app/store/reducers/admin/admin.reducer';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { PersonState } from 'src/app/store/reducers/person/person.reducer';
import { ContactNumberComponent } from '../contact-number/contact-number.component';
import { PersonHobbyComponent } from '../person-hobby/person-hobby.component';
import { PersonProfessionComponent } from '../person-profession/person-profession.component';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit, OnDestroy, AfterViewInit {

  selectedPerson!: Person;
  status!: PersonStatus;
  personForm!: FormGroup;

  personState$: Subscription = new Subscription();
  parametersStore$: Subscription = new Subscription();

  documentTypeList!: DocumentType[];
  roleList!: Role[];
  genderList!: Gender[];
  healthcareTypeList!: HealthcareType[];
  healthcareList!: Healthcare[];
  academicLevelList!: AcademicLevel[];
  committeeList!: Committee[];
  maxDate!: Moment;

  constructor(
    public store: Store<AppState>,
    public router: Router,
    private fb: FormBuilder,
    public cd: ChangeDetectorRef,
    public personService: PersonService,
    private alertService: AlertModalService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.createPersonForm();
  }

  ngAfterViewInit(): void {
    this.getParametersFromStore();
    this.getSelectedPersonFromStore();
  }

  ngOnDestroy(): void {
    this.personState$.unsubscribe();
  }

  createPersonForm(): void {
    this.maxDate = moment();
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      dateBirth: [this.maxDate, Validators.required],
      gender: ['', Validators.required],
      documentType: ['', Validators.required],
      documentId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      healthcareType: ['', Validators.required],
      healthcare: ['', Validators.required],
      academicLevel: ['', Validators.required],
      committee: [''],
    });
  }

  getSelectedPersonFromStore(): void {
    this.personState$ = this.store.select(state => state?.personState)
      .pipe(
        tap((personState: PersonState | undefined) => {
          if (personState?.status) {
            this.status = personState.status;
          }
          if (personState?.selectedPerson && personState?.status === PersonStatus.UPDATE) {
            this.setPersonToForm(personState?.selectedPerson);
          } else if (!personState?.status) {
            this.router.navigate(['/dashboard/people']);
          }
        })
      )
      .subscribe();
  }

  setPersonToForm(person: Person): void {
    this.selectedPerson = { ...person };
    const {
      name, documentType, documentId, role,
      dateBirth, email, address, gender,
      healthcareType, healthcare, academicLevel, committee
    } = person;

    // Name
    this.personForm.controls.name.setValue(name);
    this.personForm.controls.name.updateValueAndValidity();

    // Role
    this.personForm.controls.role.setValue(this.getSelectedValue(this.roleList, role));
    this.personForm.controls.role.updateValueAndValidity();

    // Date Birth
    const date = moment(new Date(dateBirth));
    this.personForm.controls.dateBirth.setValue(date);
    this.personForm.controls.dateBirth.updateValueAndValidity();

    // Gender
    this.personForm.controls.gender.setValue(this.getSelectedValue(this.genderList, gender));
    this.personForm.controls.gender.updateValueAndValidity();

    // Document Type
    this.personForm.controls.documentType.setValue(this.getSelectedValue(this.documentTypeList, documentType));
    this.personForm.controls.documentType.updateValueAndValidity();

    // Document Id
    this.personForm.controls.documentId.setValue(documentId);
    this.personForm.controls.documentId.updateValueAndValidity();

    // Email
    this.personForm.controls.email.setValue(email);
    this.personForm.controls.email.updateValueAndValidity();

    // Address
    this.personForm.controls.address.setValue(address);
    this.personForm.controls.address.updateValueAndValidity();

    // Healthcare Type
    this.personForm.controls.healthcareType.setValue(this.getSelectedValue(this.healthcareTypeList, healthcareType));
    this.personForm.controls.healthcareType.updateValueAndValidity();

    // Healthcare
    this.personForm.controls.healthcare.setValue(this.getSelectedValue(this.healthcareList, healthcare));
    this.personForm.controls.healthcare.updateValueAndValidity();

    // Academic Level
    this.personForm.controls.academicLevel.setValue(this.getSelectedValue(this.academicLevelList, academicLevel));
    this.personForm.controls.academicLevel.updateValueAndValidity();

    // Commitee
    if (committee) {
      this.personForm.controls.committee.setValue(this.getSelectedValue(this.committeeList, committee));
      this.personForm.controls.committee.updateValueAndValidity();
    }

    this.cd.detectChanges();
  }

  getParametersFromStore(): void {
    this.parametersStore$ = this.store.select(state => state?.adminState).pipe(
      tap((adminState: AdminState | undefined) => {
        if (adminState?.documentTypeList && adminState?.documentTypeList.length > 0) {
          this.documentTypeList = [...adminState.documentTypeList];
        }
        if (adminState?.roleList && adminState?.roleList.length > 0) {
          this.roleList = [...adminState.roleList];
        }
        if (adminState?.genderList && adminState?.genderList.length > 0) {
          this.genderList = [...adminState.genderList];
        }
        if (adminState?.healthcareTypeList && adminState?.healthcareTypeList.length > 0) {
          this.healthcareTypeList = [...adminState.healthcareTypeList];
        }
        if (adminState?.healthcareList && adminState?.healthcareList.length > 0) {
          this.healthcareList = [...adminState.healthcareList];
        }
        if (adminState?.academicLevelList && adminState?.academicLevelList.length > 0) {
          this.academicLevelList = [...adminState.academicLevelList];
        }
        if (adminState?.committeeList && adminState?.committeeList.length > 0) {
          this.committeeList = [...adminState.committeeList];
        }
        this.cd.detectChanges();
      })
    ).subscribe();
  }

  getSelectedValue(
    array: DocumentType[] | Role[] | Gender[] | Healthcare[] | HealthcareType[] | AcademicLevel[] | Committee[],
    selected: DocumentType | Role | Gender | Healthcare | HealthcareType | AcademicLevel | Committee | undefined,
  ): DocumentType | Role | Gender | Healthcare | HealthcareType | AcademicLevel | Committee | undefined {
    if (selected) {
      const found = array.find((value) => value.id === selected.id);
      return found;
    }
    return undefined;
  }

  onRoleChange(): void {
    if (this.isRequiredCommittee()) {
      this.personForm.controls.committee.setValidators([Validators.required]);
    } else {
      this.personForm.controls.committee.reset();
      this.personForm.controls.committee.clearValidators();
    }
    this.personForm.controls.committee.updateValueAndValidity();
  }

  isRequiredCommittee(): boolean {
    const roleValue: Role = this.personForm.controls.role.value;
    return roleValue.id === PersonRole.MEMBER;
  }

  onReturnBack(): void {
    this.store.dispatch(resetSelectedPerson());
    this.router.navigate(['/dashboard/people']);
  }

  onSavePerson(): void {
    if (this.personForm.valid) {
      if (this.selectedPerson && this.status === PersonStatus.UPDATE) {
        this.updatePerson();
      } else if (this.status === PersonStatus.NEW) {
        this.createNewPerson();
      }
    }
  }

  updatePerson(): void {
    const person = this.createPersonRequest();
    this.personService.updatePerson(person).subscribe(
      () => {
        this.router.navigate(['/dashboard/people']);
      },
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR)
    );
  }

  createNewPerson(): void {
    const person = this.createPersonRequest();
    this.personService.createPerson(person).subscribe(
      () => {
        this.router.navigate(['/dashboard/people']);
      },
      (err) => this.alertService.openErrorModal(err.error, ModalType.ERROR)
    );
  }

  createPersonRequest(): Person {
    const {
      name, role, dateBirth: dateBirthControl,
      gender, documentType, documentId,
      email, address, healthcareType,
      healthcare, academicLevel, committee,
    } = this.personForm.controls;
    const dateBirthMoment: Moment = dateBirthControl.value;
    const dateBirth = dateBirthMoment.toDate();
    const person: Person = {
      id: this.selectedPerson?.id ? this.selectedPerson?.id : undefined,
      name: name.value,
      roleId: role.value.id,
      dateBirth: dateBirth.toISOString(),
      genderId: gender.value.id,
      documentTypeId: documentType.value.id,
      documentId: documentId.value,
      email: email.value,
      address: address.value,
      healthcareTypeId: healthcareType.value.id,
      healthcareId: healthcare.value.id,
      academicLevelId: academicLevel.value.id,
      committeeId: this.isRequiredCommittee() ? committee.value.id : null,
      relativeId: this.selectedPerson?.relativeId ? this.selectedPerson?.relativeId : null,
    };

    return { ...person };
  }

  onContactNumber(): void {
    this.dialog.open(ContactNumberComponent, {
      data: { personId: this.selectedPerson.id },
      width: '700px',
      disableClose: true
    });
  }

  onHobby(): void {
    this.dialog.open(PersonHobbyComponent, {
      data: { personId: this.selectedPerson.id },
      width: '700px',
      disableClose: true
    });
  }

  onProfession(): void {
    this.dialog.open(PersonProfessionComponent, {
      data: { personId: this.selectedPerson.id },
      width: '700px',
      disableClose: true
    });
  }

}
