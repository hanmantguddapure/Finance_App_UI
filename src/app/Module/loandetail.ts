import { PaymentDetail } from './payment-detail';

export class Loandetail {
    public principalAmount: number;
    public interestAmt: number;
    public depositeAmt: number;
    public processingFees: number;
    public loanAmt: number;
    public installments: number;
    public installmentAmount: number;
    public disburseAmt: number;
    public totalCollection: number;
    public pendingAmount: number;

    public custId: string;
    public custFullName: string;
    public interest: string;
    public loanStartDate: string;
    public loanEndDate: string;
    public installMentType: String;
    public totalInstallments;
    public loanStatus: string;
    public loanAccountNo: string;
    public remark: String;
    public paymentDate: string;
    public paymentMode: string;
    public loanCollections: Array<PaymentDetail> = [];

    constructor(json: any) {
        this.principalAmount = json.principalAmount ? json.principalAmount : 0;
        this.interestAmt = json.interestAmt ? json.interestAmt : 0;
        this.depositeAmt = json.depositeAmt ? json.depositeAmt : 0;
        this.processingFees = json.processingFees ? json.processingFees : 0;
        this.loanAmt = json.loanAmt ? json.loanAmt : 0;
        this.installments = json.installments ? json.installments : 0;
        this.installmentAmount = json.installmentAmount ? json.installmentAmount : 0;
        this.disburseAmt = json.disburseAmt ? json.disburseAmt : 0;
        this.totalCollection = json.totalCollection ? json.totalCollection : 0;
        this.pendingAmount = json.pendingAmount ? json.pendingAmount : 0;

        this.custId = json.custId ? json.custId : '';
        this.custFullName = json.custFullName ? json.custFullName : '';
        this.interest = json.interest ? json.interest : '';
        this.loanStartDate = json.loanStartDate ? json.loanStartDate : '';
        this.loanEndDate = json.loanEndDate ? json.loanEndDate : '';
        this.installMentType = json.installMentType ? json.installMentType : '';
        this.totalInstallments = json.totalInstallments ? json.totalInstallments : '';
        this.loanStatus = json.loanStatus ? json.loanStatus : '';
        this.loanAccountNo = json.loanAccountNo ? json.loanAccountNo : '';
        this.remark = json.remark ? json.remark : '';
        this.paymentDate = json.paymentDate ? json.paymentDate : '';
        this.paymentMode = json.paymentMode ? json.paymentMode : '';
    }
}
