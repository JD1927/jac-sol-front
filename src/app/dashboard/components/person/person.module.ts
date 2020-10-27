import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonEffects } from 'src/app/store/effects/person/person.effects';
import { personReducer } from 'src/app/store/reducers/person/person.reducer';
import { PersonService } from './../../services/person/person.service';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonContentComponent } from './person-content/person-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';


import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ContactNumberComponent } from './contact-number/contact-number.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonHobbyComponent } from './person-hobby/person-hobby.component';
import { PersonProfessionComponent } from './person-profession/person-profession.component';

@NgModule({
  declarations: [
    PersonComponent,
    PersonViewComponent,
    PersonContentComponent,
    ContactNumberComponent,
    PersonHobbyComponent,
    PersonProfessionComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('personState', personReducer),
    EffectsModule.forFeature([PersonEffects]),
    SharedModule,
  ],
  providers: [
    PersonService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ]
})
export class PersonModule { }
