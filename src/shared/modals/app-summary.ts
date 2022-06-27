import { LoanSummary } from './loan-summary';
import { FdSummary } from './fd-summary';

export class AppSummary {
    public loanSummary: LoanSummary;
    public fdSummary: FdSummary;
    public expenses: number;
    public firmLoan: number;
    public shortTermLoan: number;

    constructor(json: any) {
        if (json) {
            this.loanSummary = new LoanSummary(json.loanSummary);
            this.fdSummary = new FdSummary(json.fdSummary);
            this.expenses = json && json.expenses ? json.expenses : 0;
            this.firmLoan = json && json.firmLoan ? json.firmLoan : 0;
            this.shortTermLoan = json && json.shortTermLoan ? json.shortTermLoan : 0;
        } else {

            this.loanSummary = new LoanSummary(null);
            this.fdSummary = new FdSummary(null);
            this.expenses = 0;
            this.firmLoan = 0;
            this.shortTermLoan = 0;
        }
    }
}
