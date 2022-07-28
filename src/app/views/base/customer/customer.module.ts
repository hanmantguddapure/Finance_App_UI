import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerRoutingModule } from './customer-routing.module';
import { LoaderComponent, SharedCustomerComponent } from 'src/shared';

import { CustomerComponent } from './customer.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        CustomerRoutingModule,
        NgbModule
    ],
    declarations: [
        CustomerComponent,
        CustomerNewComponent,
        CustomerInfoComponent,

        SharedCustomerComponent,
        LoaderComponent
    ]
})
export class CustomerModule { }
