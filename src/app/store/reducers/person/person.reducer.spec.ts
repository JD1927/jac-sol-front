import { personReducer, initialState } from './person.reducer';

describe('Person Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = personReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
