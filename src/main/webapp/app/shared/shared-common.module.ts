import { NgModule } from '@angular/core';

import { RegisterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RegisterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RegisterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RegisterSharedCommonModule {}
