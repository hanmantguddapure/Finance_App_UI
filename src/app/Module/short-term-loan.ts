export class ShortTermLoan {
    public shortTermLoanId: number;
    public loanAmt: number;
    public custFullName: string;
    public startDate: string;
    public endDate: string;
    public status: string;
    public remark: string;

    constructor(json: any) {
        this.shortTermLoanId = json.shortTermLoanId ? json.shortTermLoanId : 0;
        this.loanAmt = json.loanAmt ? json.loanAmt : 0;
        this.custFullName = json.custFullName ? json.custFullName : '';
        this.startDate = json.startDate ? json.startDate : '';
        this.endDate = json.endDate ? json.endDate : '';
        this.status = json.status ? json.status : '';
        this.remark = json.remark ? json.remark : '';
    }
}
