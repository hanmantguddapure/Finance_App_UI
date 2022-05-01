export class LoanSummary {
    public noOfaccounts:number;
    public princepleAmount:number;
	public loanAmounts:number;
    public disbursements:number;
    public pendingDisburement:number;
    public penalty:number;
    public loanIntrest:number;
    public collections:number;
    public closedAccounts:number;
    public processingFees:number;

    constructor(json: any) {
        this.noOfaccounts = json.noOfaccounts ? json.noOfaccounts : 0;
        this.princepleAmount = json.princepleAmount ? json.princepleAmount : 0;
        this.loanAmounts = json.loanAmounts ? json.loanAmounts : 0;
        this.disbursements = json.disbursements ? json.disbursements : 0;
        this.pendingDisburement = json.pendingDisburement ? json.pendingDisburement : 0;
        this.penalty = json.penalty ? json.penalty : 0;
        this.loanIntrest = json.loanIntrest ? json.loanIntrest : 0;
        this.collections = json.collections ? json.collections : 0;
        this.closedAccounts = json.closedAccounts ? json.closedAccounts : 0;
        this.processingFees = json.processingFees ? json.processingFees : 0;
    }
}
