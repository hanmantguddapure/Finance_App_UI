import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        CustomerRoutingModule
    ],
    declarations: [
        CustomerComponent,
        CustomerNewComponent,
        CustomerInfoComponent
    ]
})
export class CustomerModule { }
