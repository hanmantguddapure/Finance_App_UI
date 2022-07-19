import { Address } from './address';

export class Customer {
    public fullName: string;
    public professionName: string;
    public shortName: string;
    public profession: string;
    public buiseness: string;
    public panNo: string;
    public adharNo: string;
    public custId: BigInteger;
    public contactPersionId: BigInteger;
    public address: Address;
    public contactPeopleDtls: ContactPepoleDtls[];
    public nomineeDtls: NomineeDtls[];

    constructor(json: any) {
        this.fullName = json?.fullName ?? '';
        this.professionName = json?.professionName ?? '';
        this.shortName = json?.shortName ?? '';
        this.buiseness = json?.buiseness ?? '';
        this.profession = json?.profession ?? '';
        this.panNo = json?.panNo ?? '';
        this.adharNo = json?.adharNo ?? '';
        this.custId = json?.custId ?? '';
        this.contactPersionId = json?.contactPersionId ?? '';
        this.address = json?.address ?? '';

        this.contactPeopleDtls = new Array();
        if (json?.contactPeopleDtls?.length) {
            json.contactPeopleDtls.forEach(e => {
                this.contactPeopleDtls.push(new ContactPepoleDtls(e))
            });
        }
        this.nomineeDtls = new Array();
        // nomineeDtlsResponse
        if (json?.nomineeDtls?.length) {
            json.nomineeDtls.forEach(e => {
                this.nomineeDtls.push(new NomineeDtls(e))
            });
        }
    }
}


export class ContactPepoleDtls {
    contactPersionId: number;
    public fullName: string;
    public address: Address;

    constructor(json: any) {
        this.contactPersionId = json?.contactPersionId ?? '';
        this.fullName = json?.fullName ?? '';
        this.address = json?.address ?? '';
    }
}


export class NomineeDtls {
    nomineeId: number;
    public fullName: string;
    public address: Address;
    public relation: string;

    constructor(json: any) {
        this.nomineeId = json?.nomineeId ?? '';
        this.fullName = json?.fullName ?? '';
        this.address = json?.address ?? '';
        this.relation = json?.relation ?? '';
    }
}
