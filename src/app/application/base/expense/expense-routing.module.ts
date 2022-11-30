import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseDetailComponent } from './details/detail.component';
import { ExpenseComponent } from './expense.component';
import { ExpenseReportComponent } from './report/report.component';
import { ExpenseTypesComponent } from './types/types.component';


const routes: Routes = [
    {
        path: '',
        component: ExpenseComponent,
        children: [
            {
                path: '',
                redirectTo: 'types',
                pathMatch: 'full'
            },
            {
                path: 'types',
                component: ExpenseTypesComponent,
                data: {
                    title: 'Types'
                }
            },

            {
                path: 'detail',
                component: ExpenseDetailComponent,
                data: {
                    title: 'Detail'
                }
            },
            {
                path: 'report',
                component: ExpenseReportComponent,
                data: {
                    title: 'Report'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpenseRoutingModule { }
