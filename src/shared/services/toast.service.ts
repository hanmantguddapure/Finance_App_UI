import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: any[] = [];

    common(text) {
        this.show(text, { delay: 10000 });
    }

    success(text) {
        this.show(text, { classname: 'bg-success text-light', delay: 10000 });
    }

    error(text) {
        this.show(text, { classname: 'bg-danger text-light', delay: 15000 });
    }

    show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ textOrTpl, ...options });
    }

    remove(toast: any) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }

    clear() {
        this.toasts.splice(0, this.toasts.length);
    }
}