import { TestBed } from '@angular/core/testing';
import { AdminAuthGuard } from './admin-auth-guard.service';
describe('AdminAuthGuardService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdminAuthGuard);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=admin-auth-guard.service.spec.js.map