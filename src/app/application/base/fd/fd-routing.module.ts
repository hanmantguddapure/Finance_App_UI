import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'interest',
        data: {
            title: 'Intrest'
        },
        loadChildren: () => import('./interest/interest.module').then(m => m.IntrestModule)
    },
    {
        path: 'account',
        data: {
            title: 'Account'
        },
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'reports',
        data: {
            title: 'Reports'
        },
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FDRoutingModule { }
