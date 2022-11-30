import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAppModule } from 'src/shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';

import { CloseComponent } from './close/close.component';
import { ViewComponent } from './view/view.component';
import { NewComponent } from './new/new.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedAppModule,

        AccountRoutingModule,
        NgbModule
    ],
    declarations: [
        AccountComponent,
        NewComponent,
        ViewComponent,
        CloseComponent
    ]
})
export class AccountModule { }
