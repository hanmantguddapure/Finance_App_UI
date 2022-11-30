import { ElementRef, Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({ providedIn: 'root' })
export class GenratePDFService {
    lineHeight: any;
    title: any;
    charWidth: any;
    colY: any;
    startPadding: any;

    constructor() {
        this.lineHeight = 20;
        this.startPadding = 10;
    }

    generatePDFwithoutHtml(object, view) {
        const doc = new jsPDF('p', 'mm', 'a4');

        doc.setFontSize(16);
        doc.text(view.title, 10, (this.colY && this.colY.finalY ? (this.colY.finalY + 5) : this.lineHeight));

        this.getObject(doc, object, view, 1);

        doc.autoPrint();
        doc.output('dataurlnewwindow');
    }

    addPage(doc) {
        if ((this.lineHeight + 20) >= doc.getPageHeight()) {
            doc.addPage();
            this.lineHeight = 10  // Restart height position
        }
    }

    getObject(doc, object, view, layer) {
        const keys = Object.keys(object);
        const values = Object.values(object);

        this.charWidth = doc.getTextWidth('Text');

        values.forEach((e, i) => {
            this.addPage(doc);
            (e instanceof Object) && this.getSubTitle(i, keys, view, doc, layer);
            if (e instanceof Object && !(e instanceof Array)) {
                this.getObject(doc, e, view, layer + 1);
            } else if (e instanceof Array) {
                e.forEach(row => {
                    this.getObject(doc, row, view, layer + 1);
                })
            }
            this.title = 'lbl_' + keys[i];

            if (!view[this.title] || e instanceof Object) {
                return;
            }

            this.addPage(doc);

            if (view[this.title]) {
                doc.setFontSize(12);
                this.lineHeight += 8;
                view[this.title] && doc.text((view[this.title] + ":  " + (e ?? '-')), (this.startPadding * ((layer - 1) ? (layer - 1) : 1)), (this.colY && this.colY.finalY ? (this.colY.finalY + 5) : this.lineHeight));
            }
        });
    }

    getSubTitle(i, keys, view, doc, layer) {
        this.addPage(doc);
        this.title = 'title_' + keys[i];

        if (!view[this.title]) {
            return;
        }

        doc.setFontSize(14);
        this.lineHeight += 12;
        view[this.title] && doc.text(view[this.title], (this.startPadding * layer), (this.colY && this.colY.finalY ? (this.colY.finalY + 5) : this.lineHeight));
        doc.line((this.startPadding * layer), this.lineHeight + 2, (this.charWidth + (view[this.title].length * 2.3)), this.lineHeight + 2);
    }
}