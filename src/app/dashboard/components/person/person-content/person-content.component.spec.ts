import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonContentComponent } from './person-content.component';

describe('PersonContentComponent', () => {
  let component: PersonContentComponent;
  let fixture: ComponentFixture<PersonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
