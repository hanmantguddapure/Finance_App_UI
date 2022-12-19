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

export class PersonalLaonDetail {
    loanId: any;
    loanFrom: any;
    loanAmt: any;
    emiDate: any;
    emiAmount: any;
    loanTenure: any;
    loanInterest: any;
    loanStartDate: any;
    loanEndDate: any;

    constructor(json: any) {
        this.loanId = json?.loanId ?? '';
        this.loanFrom = json?.loanFrom ?? '';
        this.loanAmt = json?.loanAmt ?? '';
        this.emiDate = json?.emiDate ?? '';
        this.emiAmount = json?.emiAmount ?? '';
        this.loanTenure = json?.loanTenure ?? '';
        this.loanInterest = json?.loanInterest ?? '';
        this.loanStartDate = json?.loanStartDate ?? '';
        this.loanEndDate = json?.loanEndDate ?? '';
    }
}
