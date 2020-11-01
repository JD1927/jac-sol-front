import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfessionComponent } from './person-profession.component';

describe('PersonProfessionComponent', () => {
  let component: PersonProfessionComponent;
  let fixture: ComponentFixture<PersonProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
