import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: any[] = [];

    constructor(private _snackBar: MatSnackBar) { }

    message(text) {
        this._snackBar.open(text, '', {
            duration: 15 * 1000,
        });
    }
}