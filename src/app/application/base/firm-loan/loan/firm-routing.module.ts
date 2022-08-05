import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrimLoanComponent } from './firm.component';

import { CloseComponent } from './close/close.component';
import { NewComponent } from './new/new.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
    {
        path: '',
        component: FrimLoanComponent,
        children: [
            {
                path: '',
                redirectTo: 'new',
            },
            {
                path: 'new',
                component: NewComponent,
                data: {
                    title: 'New'
                }
            },
            {
                path: 'report',
                component: ReportComponent,
                data: {
                    title: 'Information'
                }
            },
            {
                path: 'close',
                component: CloseComponent,
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
export class FrimLoanRoutingModule { }
