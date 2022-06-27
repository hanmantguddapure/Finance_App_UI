export class LoanPenalty {
    public loanPenaltyId: number;
    public loanAccountId: number;
    public penaltyAmt: number;
    public custFullName: string;
    public penaltyDate: String;
    public remark: string;

    constructor(json: any) {
        this.loanPenaltyId = json && json.loanPenaltyId ? json.loanPenaltyId : 0;
        this.loanAccountId = json && json.loanAccountId ? json.loanAccountId : 0;
        this.penaltyAmt = json && json.penaltyAmt ? json.penaltyAmt : 0;
        this.custFullName = json && json.custFullName ? json.custFullName : '';
        this.penaltyDate = json && json.penaltyDate ? json.penaltyDate : '';
        this.remark = json && json.remark ? json.remark : '';
    }
}
