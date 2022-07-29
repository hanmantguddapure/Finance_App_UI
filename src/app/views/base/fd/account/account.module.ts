import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccountRoutingModule } from './account-routing.module';
import { LoaderComponent } from 'src/shared';
import { AccountComponent } from './account.component';
import { ViewComponent } from './view/view.component';
import { NewComponent } from './new/new.component';
import { CloseComponent } from './close/close.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        AccountRoutingModule,
        NgbModule
    ],
    declarations: [
        AccountComponent,
        ViewComponent,
        NewComponent,
        CloseComponent,


        LoaderComponent
    ]
})
export class AccountModule { }
