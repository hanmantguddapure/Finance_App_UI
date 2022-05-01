export class Address {
    address:string;
    city:String;
	district:String;
	state:String;
	country:String;
	zipCode:String;
	email:String;
	phoneNo:String;
	altNo:String;
	nativePlace:string;

    constructor(json: any) {
        this.address = json.address ? json.address : '';
        this.city = json.city ? json.city : '';
        this.district = json.district ? json.district : '';
        this.state = json.state ? json.state : '';
        this.country = json.country ? json.country : '';
        this.zipCode = json.zipCode ? json.zipCode : '';
        this.email = json.email ? json.email : '';
        this.phoneNo = json.phoneNo ? json.phoneNo : '';
        this.altNo = json.altNo ? json.altNo : '';
        this.nativePlace = json.nativePlace ? json.nativePlace : '';
    } 
}
