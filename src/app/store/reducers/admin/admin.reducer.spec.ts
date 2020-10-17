import { adminReducer, initialState } from './admin.reducer';

describe('Admin Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = adminReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
