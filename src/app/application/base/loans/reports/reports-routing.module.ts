import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { HoldersComponent } from './holder/holders.component';
import { PenaltyComponent } from './penalty/penalty.component';

import { ReportsComponent } from './reports.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            {
                path: '',
                redirectTo: 'status',
            },
            {
                path: 'status',
                component: StatusComponent,
                data: {
                    title: 'Status'
                }
            },
            {
                path: 'penalty',
                component: PenaltyComponent,
                data: {
                    title: 'Penalty'
                }
            },
            {
                path: 'holders',
                component: HoldersComponent,
                data: {
                    title: 'Holders'
                }
            },
            {
                path: 'collection',
                component: CollectionComponent,
                data: {
                    title: 'Collection'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }
