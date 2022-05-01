import { FDInterestDtl } from './fdinterest-dtl';

export class FDAccount {
    public accountNo: number;
    public custId: number;
    public custName: string;
    public amount: number;
    public startDate: string;
    public endDate: string;
    public closingDate: string;
    public interest: number;
    public interestAmt: number;
    public isActive: string;
    public interstPayFrom: string;
    public interestPayTo: string;
    public pendingMonthsOfInterest: number;
    public pendingInterestAmt: number;
    public remark: string;
    public paidInterestHistory: Array<FDInterestDtl> = [];

    constructor(json: any) {
        this.accountNo = json.accountNo ? json.accountNo : '';
        this.custId = json.custId ? json.custId : '';
        this.custName = json.custName ? json.custName : '';
        this.amount = json.amount ? json.amount : '';
        this.startDate = json.startDate ? json.startDate : '';
        this.endDate = json.endDate ? json.endDate : '';
        this.closingDate = json.closingDate ? json.closingDate : '';
        this.interest = json.interest ? json.interest : '';
        this.interestAmt = json.interestAmt ? json.interestAmt : '';
        this.isActive = json.isActive ? json.isActive : '';
        this.interstPayFrom = json.interstPayFrom ? json.interstPayFrom : '';
        this.interestPayTo = json.interestPayTo ? json.interestPayTo : '';
        this.pendingMonthsOfInterest = json.pendingMonthsOfInterest ? json.pendingMonthsOfInterest : '';
        this.pendingInterestAmt = json.pendingInterestAmt ? json.pendingInterestAmt : '';
        this.remark = json.remark ? json.remark : '';
    }
}
