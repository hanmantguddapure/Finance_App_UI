import { Component } from '@angular/core';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent {

  constructor(private toster: ToastService,) { }

}
