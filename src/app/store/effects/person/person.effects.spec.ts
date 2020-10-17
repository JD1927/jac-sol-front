import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PersonEffects } from './person.effects';

describe('PersonEffects', () => {
  let actions$: Observable<any>;
  let effects: PersonEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PersonEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
