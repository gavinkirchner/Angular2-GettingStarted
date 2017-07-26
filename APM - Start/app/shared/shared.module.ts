import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ForNumberDirective } from './for-number.directive';

@NgModule({
    declarations: [
        StarComponent,
        ForNumberDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StarComponent,
        ForNumberDirective,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
