import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderComponent } from 'src/shared';

import { IntrestRoutingModule } from './interest-routing.module';
import { InterestComponent } from './interest.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        IntrestRoutingModule,
        NgbModule
    ],
    declarations: [
        InterestComponent,

        LoaderComponent
    ]
})
export class IntrestModule { }
