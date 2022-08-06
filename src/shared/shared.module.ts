import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CommonComponents } from "./component";

@NgModule({
    declarations: [
        ...CommonComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,

        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatExpansionModule,
        MatProgressSpinnerModule
    ],
    exports: [
        ...CommonComponents,

        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatExpansionModule
    ]
})
export class SharedAppModule { }