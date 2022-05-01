export class UserCredentials {
    public token:number;
    public userName: string;
    public password:string;
    public jwtToken:string;
    public fullName:string;

    constructor(json: any) {
        this.token = json && json.token ? json.token : 0;
        this.userName = json && json.userName ? json.userName : '';
        this.password = json && json.password ? json.password : '';
        this.jwtToken = json && json.jwtToken ? json.jwtToken : '';
        this.fullName = json && json.fullName ? json.fullName : '';
    }
}
