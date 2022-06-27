import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
    templateUrl: 'paginations.component.html',
    styles: ['.pager li.btn:active { box-shadow: none; }'],
    encapsulation: ViewEncapsulation.None
})
export class PaginationsComponent {

    constructor(private toster: ToastService,) { }

    totalItems: number = 64;
    currentPage: number = 4;
    smallnumPages: number = 0;

    maxSize: number = 5;
    bigTotalItems: number = 675;
    bigCurrentPage: number = 1;
    numPages: number = 0;

    currentPager: number = 4;

    setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }

    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
}
