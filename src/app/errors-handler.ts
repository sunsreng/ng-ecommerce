import * as Raven from 'raven-js';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandler, Inject, NgZone, isDevMode } from '@angular/core';

export class ErrorsHandler implements ErrorHandler {
    constructor(@Inject(ToastyService) private toastyService: ToastyService, @Inject(NgZone) private ngZone: NgZone) {}

    handleError(error: any): void {
        if (!isDevMode())
            Raven.captureException(error.originalError || error);
        else
            throw error;

        this.ngZone.run(() => {
            this.toastyService.error({
                title: 'Error',
                msg: 'An unexpected error happened.',
                theme: 'material',
                showClose: true,
                timeout: 5000
            });
        });
    }
}
