import { LoanSummary } from './loan-summary';
import { FdSummary } from './fd-summary';

export class AppSummary {
    public loanSummary:LoanSummary;
    public fdSummary:FdSummary;
    public expenses:number;
    public firmLoan:number;
    public shortTermLoan:number;
    
    constructor(json: any) {
        this.loanSummary = new LoanSummary(json.loanSummary);
        this.fdSummary = new FdSummary(json.fdSummary);
        this.expenses = json.expenses ? json.expenses : 0;
        this.firmLoan = json.firmLoan ? json.firmLoan : 0;
        this.shortTermLoan = json.shortTermLoan ? json.shortTermLoan : 0;
    }
}
