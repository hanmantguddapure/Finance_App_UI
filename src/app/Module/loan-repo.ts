export class LoanRepo {
    public loanAccountNo: number;
    public loanAmt: number;
    public totalCollection: number;
    public remainCollection: number;
    public principalAmount: number;
    public disburseAmt: number;
    public proceessingFee: number;
    public totalInterest: number;
    public totalPenalty: number;
    public totalEarned: number;
    public loanEndigDate: string;
    public loanStatus: string;
    public paymentDate: string;
    public paymentMode: string;
    public fullName: string;

    constructor(json: any) {
        this.loanAccountNo = json.loanAccountNo ? json.loanAccountNo : 0;
        this.loanAmt = json.loanAmt ? json.loanAmt : 0;
        this.totalCollection = json.totalCollection ? json.totalCollection : 0;
        this.remainCollection = json.remainCollection ? json.remainCollection : 0;
        this.principalAmount = json.principalAmount ? json.principalAmount : 0;
        this.disburseAmt = json.disburseAmt ? json.disburseAmt : 0;
        this.proceessingFee = json.proceessingFee ? json.proceessingFee : 0;
        this.totalInterest = json.totalInterest ? json.totalInterest : 0;
        this.totalPenalty = json.totalPenalty ? json.totalPenalty : 0;
        this.totalEarned = json.totalEarned ? json.totalEarned : 0;
        this.loanEndigDate = json.loanEndigDate ? json.loanEndigDate : '';
        this.loanStatus = json.loanStatus ? json.loanStatus : '';
        this.paymentDate = json.paymentDate ? json.paymentDate : '';
        this.paymentMode = json.paymentMode ? json.paymentMode : '';
        this.fullName = json.fullName ? json.fullName : '';
    }
}
