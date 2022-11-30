export class LoanSummary {
    noOfaccounts: number;
    princepleAmount: number;
    loanAmounts: number;
    disbursements: number;
    pendingDisburement: number;
    penalty: number;
    loanIntrest: number;
    collections: number;
    closedAccounts: number;
    processingFees: number;

    constructor(json: any) {
        this.noOfaccounts = json && json.noOfaccounts ? json.noOfaccounts : 0;
        this.princepleAmount = json && json.princepleAmount ? json.princepleAmount : 0;
        this.loanAmounts = json && json.loanAmounts ? json.loanAmounts : 0;
        this.disbursements = json && json.disbursements ? json.disbursements : 0;
        this.pendingDisburement = json && json.pendingDisburement ? json.pendingDisburement : 0;
        this.penalty = json && json.penalty ? json.penalty : 0;
        this.loanIntrest = json && json.loanIntrest ? json.loanIntrest : 0;
        this.collections = json && json.collections ? json.collections : 0;
        this.closedAccounts = json && json.closedAccounts ? json.closedAccounts : 0;
        this.processingFees = json && json.processingFees ? json.processingFees : 0;
    }
}
