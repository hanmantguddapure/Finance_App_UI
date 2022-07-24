import { Address } from './address';

export class CustomerView {
    title = "Customer Detail";
    title_address = "Address Detail";
    title_nomineeDtls = "Nominee Detail";
    title_contactPeopleDtls = "Witness Persions";
    lbl_fullName = "Full Name";
    lbl_professionName = "Buiseness";
    lbl_panNo = "PAN No";
    lbl_adharNo = "Aadhar No";
    lbl_address = "Address";
    lbl_city = "City";
    lbl_district = "District";
    lbl_state = "State";
    lbl_country = "Country";
    lbl_zipCode = "Postal Code";
    lbl_email = "Email";
    lbl_phoneNo = "Phone No";
    lbl_nativePlace = "Native Place";
    lbl_altNo = "Alternet No";
    lbl_relation = "Nominee Relation";
}

export class Customer {
    fullName: string;
    professionName: string;
    shortName: string;
    profession: string;
    buiseness: string;
    panNo: string;
    adharNo: string;
    custId: BigInteger;
    contactPersionId: BigInteger;
    address: Address;
    contactPeopleDtls: ContactPepoleDtls[];
    nomineeDtls: NomineeDtls[];
    view: CustomerView;

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

        this.view = new CustomerView();

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
