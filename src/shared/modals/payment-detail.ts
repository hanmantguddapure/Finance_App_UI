export class PaymentDetail {
    public payment: number;
    public loanAccNo: string;
    public paymentMethod: string;
    public paymentDate: String;
    public paymentId: string;

    constructor(json: any) {
        this.payment = json && json.payment ? json.payment : 0;
        this.loanAccNo = json && json.loanAccNo ? json.loanAccNo : '';
        this.paymentMethod = json && json.paymentMethod ? json.paymentMethod : '';
        this.paymentDate = json && json.paymentDate ? json.paymentDate : '';
        this.paymentId = json && json.paymentId ? json.paymentId : '';
    }
}
