export class PaymentDetail {
    public payment: number;
    public loanAccNo: string;
    public paymentMethod: string;
    public paymentDate: String;
    public paymentId: string;

    constructor(json: any) {
        this.payment = json.payment ? json.payment : 0;
        this.loanAccNo = json.loanAccNo ? json.loanAccNo : '';
        this.paymentMethod = json.paymentMethod ? json.paymentMethod : '';
        this.paymentDate = json.paymentDate ? json.paymentDate : '';
        this.paymentId = json.paymentId ? json.paymentId : '';
    }
}
