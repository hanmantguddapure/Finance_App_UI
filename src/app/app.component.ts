import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet, cilBell, cilEnvelopeOpen, cilCommentSquare, cilCreditCard, cilFile, cilList, cilLockLocked, cilMenu, cilSettings, cilTask, cilUser, cilPuzzle, cilViewModule, cilPencil, cilFolder, cilNotes } from '@coreui/icons';
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
        iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet, cilBell, cilEnvelopeOpen, cilTask, cilCommentSquare, cilUser, cilSettings, cilCreditCard, cilFile, cilLockLocked, cilMenu, cilList, cilPuzzle, cilViewModule, cilPencil, cilFolder, cilNotes };
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
