import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                providers: [StorageService],
            });
        }),
    );

    it('should be created', inject([StorageService], (service: StorageService) => {
        expect(service).toBeTruthy();
    }));
});
