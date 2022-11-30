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
        this.accountNo = json && json.accountNo ? json.accountNo : '';
        this.custId = json && json.custId ? json.custId : '';
        this.custName = json && json.custName ? json.custName : '';
        this.amount = json && json.amount ? json.amount : '';
        this.startDate = json && json.startDate ? json.startDate : '';
        this.endDate = json && json.endDate ? json.endDate : '';
        this.closingDate = json && json.closingDate ? json.closingDate : '';
        this.interest = json && json.interest ? json.interest : '';
        this.interestAmt = json && json.interestAmt ? json.interestAmt : '';
        this.isActive = json && json.isActive ? json.isActive : '';
        this.interstPayFrom = json && json.interstPayFrom ? json.interstPayFrom : '';
        this.interestPayTo = json && json.interestPayTo ? json.interestPayTo : '';
        this.pendingMonthsOfInterest = json && json.pendingMonthsOfInterest ? json.pendingMonthsOfInterest : '';
        this.pendingInterestAmt = json && json.pendingInterestAmt ? json.pendingInterestAmt : '';
        this.remark = json && json.remark ? json.remark : '';

        this.paidInterestHistory = new Array();
        json?.paidInterestHistory && json.paidInterestHistory?.forEach(e => {
            this.paidInterestHistory.push(new FDInterestDtl(e))
        });
    }
}
