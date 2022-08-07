import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'loan',
        data: {
            title: 'Loan'
        },
        loadChildren: () => import('./loan/firm.module').then(m => m.FrimLoanModule)
    },
    {
        path: 'short-term',
        data: {
            title: 'short Term'
        },
        loadChildren: () => import('./short-term/short-term.module').then(m => m.ShortTermModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FirmLoanRoutingModule { }
