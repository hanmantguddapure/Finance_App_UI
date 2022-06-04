import { Component } from '@angular/core';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {

  constructor(private toster: ToastService,) { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
