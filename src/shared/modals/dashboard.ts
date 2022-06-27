export class Dashboard {
    public totalActiveLoanCollection:number;
    public totalRunningLoanAmt:number;
    public totalOpenedLoanAccount:number;
    public totalDisburesements:number;
    public pendingCollections:number;
    public todayTotalCollection:number;
    public totalActiveFdAcc:number;
    public totalFdAmount:number;
    public fdPaidInterest:number;
    public pendingDisbursement:number;
    public pendingFdInterest:number;

    constructor(json: any) {
        this.totalActiveLoanCollection = json && json.totalActiveLoanCollection ? json.totalActiveLoanCollection : '';
        this.totalRunningLoanAmt = json && json.totalRunningLoanAmt ? json.totalRunningLoanAmt : '';
        this.totalOpenedLoanAccount = json && json.totalOpenedLoanAccount ? json.totalOpenedLoanAccount : '';
        this.totalDisburesements = json && json.totalDisburesements ? json.totalDisburesements : '';
        this.pendingCollections = json && json.pendingCollections ? json.pendingCollections : '';
        this.todayTotalCollection = json && json.todayTotalCollection ? json.todayTotalCollection : '';
        this.totalActiveFdAcc = json && json.totalActiveFdAcc ? json.totalActiveFdAcc : '';
        this.totalFdAmount = json && json.totalFdAmount ? json.totalFdAmount : '';
        this.fdPaidInterest = json && json.fdPaidInterest ? json.fdPaidInterest : '';
        this.pendingDisbursement = json && json.pendingDisbursement ? json.pendingDisbursement : '';
        this.pendingFdInterest = json && json.pendingFdInterest ? json.pendingFdInterest : '';
    }
}
