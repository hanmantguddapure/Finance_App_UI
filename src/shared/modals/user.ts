export class User {
    token: number;
    userName: any;
    password: any;
    jwtToken: any;
    fullName: any;

    constructor(json: any) {
        this.token = json?.token ?? 0;
        this.userName = json?.userName ?? '';
        this.password = json?.password ?? '';
        this.jwtToken = json?.jwtToken ?? '';
        this.fullName = json?.fullName ?? '';
    }
}