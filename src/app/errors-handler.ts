import { ToastyService } from 'ng2-toasty';
import { ErrorHandler, Inject, NgZone } from '@angular/core';

export class ErrorsHandler implements ErrorHandler {
    constructor(@Inject(ToastyService) private toastyService: ToastyService, @Inject(NgZone) private ngZone: NgZone) {}
    handleError(error: any): void {
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
