import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, cilBell, cilEnvelopeOpen, cilCommentSquare, cilCreditCard, cilFile, cilList, cilLockLocked, cilMenu, cilSettings, cilTask, cilUser, cilPuzzle, cilViewModule, cilPencil, cilFolder, cilNotes, cilLibrary, cilDollar, cilMoney, cilBank, cilBuilding } from '@coreui/icons';
import { CacheService } from 'src/shared/services/cache.service';

@Component({
    // tslint:disable-next-line
    selector: 'body',
    template: `
    <app-toasts aria-live="polite" aria-atomic="true"></app-toasts>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    constructor(private router: Router,
        public iconSet: IconSetService,
        public cache: CacheService
    ) {
        iconSet.icons = { cilListNumbered, cilPaperPlane, cilBell, cilEnvelopeOpen, cilTask, cilCommentSquare, cilUser, cilSettings, cilCreditCard, cilFile, cilLockLocked, cilMenu, cilList, cilPuzzle, cilViewModule, cilPencil, cilFolder, cilNotes, cilLibrary, cilDollar, cilMoney, cilBank, cilBuilding };
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
