import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { RegisterSharedLibsModule, RegisterSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [RegisterSharedLibsModule, RegisterSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [RegisterSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterSharedModule {
    static forRoot() {
        return {
            ngModule: RegisterSharedModule
        };
    }
}
