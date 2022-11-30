import { Component } from '@angular/core';
import { navItems } from 'src/shared/component/_nav';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
    navItems = navItems;

}
