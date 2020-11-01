import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHobbyComponent } from './person-hobby.component';

describe('PersonDetailComponent', () => {
  let component: PersonHobbyComponent;
  let fixture: ComponentFixture<PersonHobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonHobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
