export class LoanPenalty {
    public loanPenaltyId: number;
    public loanAccountId: number;
    public penaltyAmt: number;
    public custFullName: string;
    public penaltyDate: String;
    public remark: string;

    constructor(json: any) {
        this.loanPenaltyId = json.loanPenaltyId ? json.loanPenaltyId : 0;
        this.loanAccountId = json.loanAccountId ? json.loanAccountId : 0;
        this.penaltyAmt = json.penaltyAmt ? json.penaltyAmt : 0;
        this.custFullName = json.custFullName ? json.custFullName : '';
        this.penaltyDate = json.penaltyDate ? json.penaltyDate : '';
        this.remark = json.remark ? json.remark : '';
    }
}
