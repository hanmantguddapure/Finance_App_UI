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
        this.fullName = json.fullName ? json.fullName : '';
        this.professionName = json.professionName ? json.professionName : '';
        this.panNo = json.panNo ? json.panNo : '';
        this.adharNo = json.adharNo ? json.adharNo : '';
        this.custId = json.custId ? json.custId : '';
        this.contactPersionId = json.contactPersionId ? json.contactPersionId : '';
        this.address = json.address ? json.address : '';
    }
}
