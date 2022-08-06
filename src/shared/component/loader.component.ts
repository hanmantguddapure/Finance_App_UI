import { Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
    <div class="spinner-wrapper">
        <div class="spinner-border spinner" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    
    `,
    styles: [
        `
        .spinner-wrapper {
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            z-index: 1031;
            position: absolute;
            background-color: rgb(87 87 136 / 48%);
        }
        .spinner{
            top: 50%;
            left: 50%;
            position: absolute
        }
        `
    ]
})
export class LoaderComponent {

    constructor() {
    }

    ngOnInit() {
    }
}
