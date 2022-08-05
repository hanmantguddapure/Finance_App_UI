import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { ShortTermRoutingModule } from './short-term-routing.module';

import { ShortTermComponent } from './short-term.component';
import { CloseComponent } from './close/close.component';
import { NewComponent } from './new/new.component';
import { ReportComponent } from './report/report.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,

        ShortTermRoutingModule,
        NgbModule
    ],
    declarations: [
        ShortTermComponent,
        CloseComponent,
        NewComponent,
        ReportComponent
    ]
})
export class ShortTermModule { }
