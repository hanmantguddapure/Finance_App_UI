import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface,
    PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
};

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgbModal, NgbModalConfig, NgbToast } from '@ng-bootstrap/ng-bootstrap';

// Import routing module
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

// Import containers
import {
    DefaultFooterComponent,
    DefaultHeaderComponent,
    DefaultLayoutComponent,
} from 'src/shared';

import { P404Component } from '../shared/component/error/404.component';
import { P500Component } from '../shared/component/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ToastsContainer } from './views/base/common/app-toaster.component';

import { JwtAuthService } from 'src/shared/services/token-intercepter.service';

@NgModule({
    declarations: [
        AppComponent,
        DefaultFooterComponent,
        DefaultHeaderComponent,
        DefaultLayoutComponent,
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
        AvatarModule,
        BreadcrumbModule,
        FooterModule,
        DropdownModule,
        GridModule,
        HeaderModule,
        SidebarModule,
        IconModule,
        PerfectScrollbarModule,
        NavModule,
        ButtonModule,
        BsDropdownModule.forRoot(),
        //TabsModule.forRoot(),
        NgbModule,
        NgChartsModule,
        HttpClientModule,
        FormsModule,
        FormModule,
        UtilitiesModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        SidebarModule,
        SharedModule,
        TabsModule,
        ListGroupModule,
        ProgressModule,
        BadgeModule,
        ListGroupModule,
        CardModule,
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
