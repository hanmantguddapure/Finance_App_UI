import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IconSetService } from '@coreui/icons-angular';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalConfig, NgbToast } from '@ng-bootstrap/ng-bootstrap';

// Import routing module
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { P404Component } from '../shared/component/error/404.component';
import { P500Component } from '../shared/component/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ToastsContainer } from './views/base/common/app-toaster.component';

import { JwtAuthService } from 'src/shared/services/token-intercepter.service';
import { SharedAppModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        P404Component,
        P500Component,
        LoginComponent,
        RegisterComponent,
        ToastsContainer
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        NgbModule,
        HttpClientModule,

        FormsModule,
        ReactiveFormsModule,
        SharedAppModule
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
        IconSetService,
        NgbToast,
        NgbModalConfig,
        NgbModal,
        Title
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
