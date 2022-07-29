import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,

        CustomerRoutingModule,
        NgbModule
    ],
    declarations: [
        CustomerComponent,
        CustomerNewComponent,
        CustomerInfoComponent
    ]
})
export class CustomerModule { }
