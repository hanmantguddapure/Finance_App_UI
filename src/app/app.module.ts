import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { P404Component } from 'src/shared/component/error/404.component';
import { P500Component } from 'src/shared/component/error/500.component';
import { RegisterComponent } from './application/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login.component';
import { NgbModal, NgbModalConfig, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JwtAuthService } from 'src/shared/services/token-intercepter.service';
import { SharedAppModule } from 'src/shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedAppModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,

        PageNotFoundComponent,
        P404Component,
        P500Component,
        RegisterComponent,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtAuthService,
            multi: true
        },
        NgbToast,
        NgbModalConfig,
        NgbModal
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(router: Router) { }
}
