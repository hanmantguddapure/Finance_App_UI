import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoldersComponent } from './holders/holders.component';

import { ReportsComponent } from './reports.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            {
                path: '',
                redirectTo: 'holders',
                pathMatch: 'full'
            },
            {
                path: 'holders',
                component: HoldersComponent,
                data: {
                    title: 'fdaccountview'
                }
            },
            {
                path: 'status',
                component: StatusComponent,
                data: {
                    title: 'fdcustreport'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }
