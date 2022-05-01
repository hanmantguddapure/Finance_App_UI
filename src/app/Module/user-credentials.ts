export class UserCredentials {
    public token:number;
    public userName: string;
    public password:string;
    public jwtToken:string;
    public fullName:string;

    constructor(json: any) {
        this.token = json.token ? json.token : 0;
        this.userName = json.userName ? json.userName : '';
        this.password = json.password ? json.password : '';
        this.jwtToken = json.jwtToken ? json.jwtToken : '';
        this.fullName = json.fullName ? json.fullName : '';
    }
}
