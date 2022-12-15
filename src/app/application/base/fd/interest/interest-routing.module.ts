import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterestComponent } from './interest.component';

const routes: Routes = [
    {
        path: '',
        component: InterestComponent,
        // title: 'Intrest'
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'interest',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path: 'interest',
        //         component: InterestComponent,
        //         data: {
        //             title: 'fdpayinterest'
        //         }
        //     }
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntrestRoutingModule { }
