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
        this.address = json && json.address ? json.address : '';
        this.city = json && json.city ? json.city : '';
        this.district = json && json.district ? json.district : '';
        this.state = json && json.state ? json.state : '';
        this.country = json && json.country ? json.country : '';
        this.zipCode = json && json.zipCode ? json.zipCode : '';
        this.email = json && json.email ? json.email : '';
        this.phoneNo = json && json.phoneNo ? json.phoneNo : '';
        this.altNo = json && json.altNo ? json.altNo : '';
        this.nativePlace = json && json.nativePlace ? json.nativePlace : '';
    } 
}
