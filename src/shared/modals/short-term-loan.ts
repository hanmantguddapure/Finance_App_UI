export class ShortTermLoan {
    public shortTermLoanId: number;
    public loanAmt: number;
    public custFullName: string;
    public startDate: string;
    public endDate: string;
    public status: string;
    public remark: string;

    constructor(json: any) {
        this.shortTermLoanId = json && json.shortTermLoanId ? json.shortTermLoanId : 0;
        this.loanAmt = json && json.loanAmt ? json.loanAmt : 0;
        this.custFullName = json && json.custFullName ? json.custFullName : '';
        this.startDate = json && json.startDate ? json.startDate : '';
        this.endDate = json && json.endDate ? json.endDate : '';
        this.status = json && json.status ? json.status : '';
        this.remark = json && json.remark ? json.remark : '';
    }
}
