export class FirmLoan {
    public interestAmt: number;
    public firmLoanId: number;
    public loanAmt: number;
    public isActive: number;
    public loanFrom: string;
    public startDate: string;
    public closingDate: string;
    public remark: string;

    constructor(json: any) {
        this.interestAmt = json.interestAmt ? json.interestAmt : 0;
        this.firmLoanId = json.firmLoanId ? json.firmLoanId : 0;
        this.loanAmt = json.loanAmt ? json.loanAmt : 0;
        this.isActive = json.isActive ? json.isActive : 0;
        this.loanFrom = json.loanFrom ? json.loanFrom : '';
        this.startDate = json.startDate ? json.startDate : '';
        this.closingDate = json.closingDate ? json.closingDate : '';
        this.remark = json.remark ? json.remark : '';
    }
}
