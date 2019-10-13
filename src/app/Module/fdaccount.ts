import { FDInterestDtl } from './fdinterest-dtl';

export class FDAccount {
    public accountNo:number;
	public  custId:number;
	public custName:string;
	public amount:number;
	public startDate:string;
	public endDate:string;
	public closingDate:string;
	public interest:number;
	public interestAmt:number;
	public isActive:string;
	public interstPayFrom:string;
	public interestPayTo:string;
	public pendingMonthsOfInterest:number;
	public pendingInterestAmt:number;
	public remark:string;
	public paidInterestHistory:Array<FDInterestDtl> = [];
}
