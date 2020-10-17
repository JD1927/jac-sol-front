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



@NgModule({
  declarations: [
    PersonComponent,
    PersonViewComponent,
    PersonContentComponent
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
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('personState', personReducer),
    EffectsModule.forFeature([PersonEffects]),
    SharedModule,
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
