import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconModule } from "@coreui/icons-angular";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { CommonComponents } from "./component";
import {
    ButtonGroupModule,
    ButtonModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    NavModule,
    SharedModule,
    SidebarModule,
    UtilitiesModule
} from "@coreui/angular";

@NgModule({
    declarations: [
        ...CommonComponents
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IconModule,
        PerfectScrollbarModule,
        NgbModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule,

        ButtonGroupModule,
        ButtonModule,
        DropdownModule,
        FooterModule,
        FormModule,
        GridModule,
        HeaderModule,
        NavModule,
        SharedModule,
        SidebarModule,
        UtilitiesModule,

        ReactiveFormsModule
    ],
    exports: [
        ...CommonComponents
    ]
})
export class SharedAppModule { }