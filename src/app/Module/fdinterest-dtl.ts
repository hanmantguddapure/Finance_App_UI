export class FDInterestDtl {
    public fdAccountId:number;
    public interestAmt:number;
    public fromDate:string;
    public toDate:string;
    public paidMode:string;
    public paidDate:string;

    constructor(json: any) {
        this.fdAccountId = json.fdAccountId ? json.fdAccountId : 0;
        this.interestAmt = json.interestAmt ? json.interestAmt : 0;
        this.fromDate = json.fromDate ? json.fromDate : '';
        this.toDate = json.toDate ? json.toDate : '';
        this.paidMode = json.paidMode ? json.paidMode : '';
        this.paidDate = json.paidDate ? json.paidDate : '';
    }
}
