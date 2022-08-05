import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const applicationRoutes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'customer',
                loadChildren: () => import('./base/customer/customer.module').then(m => m.CustomerModule),
                data: { preload: true }
            },
            {
                path: 'expense',
                data: {
                    title: 'Expense',
                    preload: true
                },
                loadChildren: () => import('./base/expense/expense.module').then(m => m.ExpenseModule)
            },
            {
                path: 'fd',
                data: {
                    title: 'FD',
                    preload: true
                },
                loadChildren: () => import('./base/fd/fd.module').then(m => m.FDModule)
            },
            {
                path: 'firm',
                data: {
                    title: 'Firm',
                    preload: true
                },
                loadChildren: () => import('./base/firm-loan/firm-loan.module').then(m => m.FirmLoanModule)
            },
            {
                path: 'loan',
                data: {
                    title: 'Loan',
                    preload: true
                },
                loadChildren: () => import('./base/loans/loan.module').then(m => m.LoanModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(applicationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule { }
