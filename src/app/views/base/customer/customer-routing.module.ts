import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            {
                path: '',
                redirectTo: 'customer-new',
                pathMatch: 'full'
            },
            {
                path: 'customer-new',
                component: CustomerNewComponent,
                data: {
                    title: 'New'
                }
            },
            {
                path: 'customer-info',
                component: CustomerInfoComponent,
                data: {
                    title: 'Information'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
