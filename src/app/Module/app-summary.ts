import { LoanSummary } from './loan-summary';
import { FdSummary } from './fd-summary';

export class AppSummary {
    public loanSummary:LoanSummary;
    public fdSummary:FdSummary;
    public expenses:number;
    public firmLoan:number;
    public shortTermLoan:number;
}
