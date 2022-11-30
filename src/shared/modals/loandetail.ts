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
        this.principalAmount = json && json.principalAmount ? json.principalAmount : 0;
        this.interestAmt = json && json.interestAmt ? json.interestAmt : 0;
        this.depositeAmt = json && json.depositeAmt ? json.depositeAmt : 0;
        this.processingFees = json && json.processingFees ? json.processingFees : 0;
        this.loanAmt = json && json.loanAmt ? json.loanAmt : 0;
        this.installments = json && json.installments ? json.installments : 0;
        this.installmentAmount = json && json.installmentAmount ? json.installmentAmount : 0;
        this.disburseAmt = json && json.disburseAmt ? json.disburseAmt : 0;
        this.totalCollection = json && json.totalCollection ? json.totalCollection : 0;
        this.pendingAmount = json && json.pendingAmount ? json.pendingAmount : 0;

        this.custId = json && json.custId ? json.custId : '';
        this.custFullName = json && json.custFullName ? json.custFullName : '';
        this.interest = json && json.interest ? json.interest : '';
        this.loanStartDate = json && json.loanStartDate ? json.loanStartDate : '';
        this.loanEndDate = json && json.loanEndDate ? json.loanEndDate : '';
        this.installMentType = json && json.installMentType ? json.installMentType : '';
        this.totalInstallments = json && json.totalInstallments ? json.totalInstallments : '';
        this.loanStatus = json && json.loanStatus ? json.loanStatus : '';
        this.loanAccountNo = json && json.loanAccountNo ? json.loanAccountNo : '';
        this.remark = json && json.remark ? json.remark : '';
        this.paymentDate = json && json.paymentDate ? json.paymentDate : '';
        this.paymentMode = json && json.paymentMode ? json.paymentMode : '';
    }
}
