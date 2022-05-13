export class UserCredentials {
    public token: number;
    public userName: any;
    public password: any;
    public jwtToken: any;
    public fullName: any;

    constructor(json: any) {
        this.token = json && json.token ? json.token : 0;
        this.userName = json && json.userName ? json.userName : '';
        this.password = json && json.password ? json.password : '';
        this.jwtToken = json && json.jwtToken ? json.jwtToken : '';
        this.fullName = json && json.fullName ? json.fullName : '';
    }
}
