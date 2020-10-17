import * as fromPerson from './person.actions';

describe('loadPersons', () => {
  it('should return an action', () => {
    expect(fromPerson.loadPersons().type).toBe('[Person] Load Persons');
  });
});
