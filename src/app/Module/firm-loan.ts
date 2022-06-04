export class FirmLoan {
    public interestAmt: number;
    public firmLoanId: number;
    public loanAmt: number;
    public isActive: number;
    public active: number;
    public loanFrom: string;
    public startDate: string;
    public closingDate: string;
    public remark: string;

    constructor(json: any) {
        this.interestAmt = json && json.interestAmt ? json.interestAmt : 0;
        this.firmLoanId = json && json.firmLoanId ? json.firmLoanId : 0;
        this.loanAmt = json && json.loanAmt ? json.loanAmt : 0;
        this.isActive = json && json.isActive ? json.isActive : 0;
        this.active = json && json.active ? json.active : 0;
        this.loanFrom = json && json.loanFrom ? json.loanFrom : '';
        this.startDate = json && json.startDate ? json.startDate : '';
        this.closingDate = json && json.closingDate ? json.closingDate : '';
        this.remark = json && json.remark ? json.remark : '';
    }
}
