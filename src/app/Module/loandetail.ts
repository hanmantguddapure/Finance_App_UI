import { PaymentDetail } from './payment-detail';

export class Loandetail {
    public custId:string;
    public custFullName:string;
    public principalAmount:number;
    public interest:string;
    public interestAmt:number;
    public depositeAmt:number;
    public processingFees:number;
    public loanAmt:number;
    public loanStartDate: string;
    public loanEndDate: string;
    public installMentType:String;
    public installments:number;
    public totalInstallments;
    public installmentAmount: number;
    public loanStatus:string;
    public disburseAmt:number;
    public loanAccountNo:string; 
    public totalCollection:number;
    public pendingAmount:number;
    public remark:String;
    public paymentDate:string;
    public paymentMode:string;
    public loanCollections:Array<PaymentDetail> = [];
}
