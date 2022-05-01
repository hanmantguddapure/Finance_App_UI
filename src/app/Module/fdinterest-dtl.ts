export class FDInterestDtl {
    public fdAccountId:number;
    public interestAmt:number;
    public fromDate:string;
    public toDate:string;
    public paidMode:string;
    public paidDate:string;

    constructor(json: any) {
        this.fdAccountId = json && json.fdAccountId ? json.fdAccountId : 0;
        this.interestAmt = json && json.interestAmt ? json.interestAmt : 0;
        this.fromDate = json && json.fromDate ? json.fromDate : '';
        this.toDate = json && json.toDate ? json.toDate : '';
        this.paidMode = json && json.paidMode ? json.paidMode : '';
        this.paidDate = json && json.paidDate ? json.paidDate : '';
    }
}
