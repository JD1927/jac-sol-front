import * as fromAdmin from './admin.actions';

describe('loadAdmins', () => {
  it('should return an action', () => {
    expect(fromAdmin.loadAdmins().type).toBe('[Admin] Load Admins');
  });
});
