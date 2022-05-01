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
        this.totalActiveLoanCollection = json.totalActiveLoanCollection ? json.totalActiveLoanCollection : '';
        this.totalRunningLoanAmt = json.totalRunningLoanAmt ? json.totalRunningLoanAmt : '';
        this.totalOpenedLoanAccount = json.totalOpenedLoanAccount ? json.totalOpenedLoanAccount : '';
        this.totalDisburesements = json.totalDisburesements ? json.totalDisburesements : '';
        this.pendingCollections = json.pendingCollections ? json.pendingCollections : '';
        this.todayTotalCollection = json.todayTotalCollection ? json.todayTotalCollection : '';
        this.totalActiveFdAcc = json.totalActiveFdAcc ? json.totalActiveFdAcc : '';
        this.totalFdAmount = json.totalFdAmount ? json.totalFdAmount : '';
        this.fdPaidInterest = json.fdPaidInterest ? json.fdPaidInterest : '';
        this.pendingDisbursement = json.pendingDisbursement ? json.pendingDisbursement : '';
        this.pendingFdInterest = json.pendingFdInterest ? json.pendingFdInterest : '';
    }
}
