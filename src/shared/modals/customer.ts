import { Address } from './address';

export class Customer {
    public fullName: string;
    public professionName: string;
    public panNo: string;
    public adharNo: string;
    public custId: BigInteger;
    public contactPersionId: BigInteger;
    public address: Address;

    constructor(json: any) {
        this.fullName = json && json.fullName ? json.fullName : '';
        this.professionName = json && json.professionName ? json.professionName : '';
        this.panNo = json && json.panNo ? json.panNo : '';
        this.adharNo = json && json.adharNo ? json.adharNo : '';
        this.custId = json && json.custId ? json.custId : '';
        this.contactPersionId = json && json.contactPersionId ? json.contactPersionId : '';
        this.address = json && json.address ? json.address : '';
    }
}
