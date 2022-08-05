import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMIComponent } from './installments/emi.component';
import { LoanPenltyComponent } from './penalty/penlty.component';

const routes: Routes = [
    {
        path: 'penalty',
        component: LoanPenltyComponent,
        data: {
            title: 'Penalty'
        }
    },
    {
        path: 'emi',
        component: EMIComponent,
        data: {
            title: 'Emi Component'
        }
    },
    {
        path: 'disbursement',
        data: {
            title: 'Disbursement'
        },
        loadChildren: () => import('./disbursement/disbursement.module').then(m => m.DisbursementModule)
    },
    {
        path: 'reports',
        data: {
            title: 'Reports'
        },
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
    },
    {
        path: 'account',
        data: {
            title: 'Account'
        },
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanRoutingModule { }
