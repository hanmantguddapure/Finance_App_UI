export class LoanCollectionSummary {
    public payment: number;
    public accNo: number;
    public paymentDate: string;
    public fullName: string;
    public fromDate: string;
    public toDate: string;

    constructor(json: any) {
        this.payment = json && json.payment ? json.payment : 0;
        this.accNo = json && json.accNo ? json.accNo : 0;
        this.paymentDate = json && json.paymentDate ? json.paymentDate : '';
        this.fullName = json && json.fullName ? json.fullName : '';
        this.fromDate = json && json.fromDate ? json.fromDate : '';
        this.toDate = json && json.toDate ? json.toDate : '';
    }
}
