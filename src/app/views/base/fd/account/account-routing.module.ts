import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { CloseComponent } from './close/close.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: '',
                redirectTo: 'new',
                pathMatch: 'full'
            },
            {
                path: 'new',
                component: NewComponent,
                data: {
                    title: 'New'
                }
            },
            {
                path: 'view',
                component: ViewComponent,
                data: {
                    title: 'View'
                }
            },
            {
                path: 'close',
                component: CloseComponent,
                data: {
                    title: 'Close'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
