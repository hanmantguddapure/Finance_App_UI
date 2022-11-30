import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IntrestRoutingModule } from './interest-routing.module';
import { InterestComponent } from './interest.component';
import { SharedAppModule } from 'src/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        SharedAppModule,
        IntrestRoutingModule,
        NgbModule
    ],
    declarations: [
        InterestComponent
    ]
})
export class IntrestModule { }
