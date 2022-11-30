import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from 'src/shared/component/error/404.component';
import { P500Component } from 'src/shared/component/error/500.component';
import { RegisterComponent } from './application/register/register.component';

import { LoginComponent } from './auth/login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'application',
        loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule),
    },
    { path: '', redirectTo: '/application', pathMatch: 'full' },

    {
        path: '404',
        component: P404Component,
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: P500Component,
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Register Page'
        }
    },
    { path: '**', component: P404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategyService,
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
