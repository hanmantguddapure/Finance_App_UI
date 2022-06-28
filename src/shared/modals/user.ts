export class User {
    token: number;
    userName: any;
    password: any;
    jwtToken: any;
    fullName: any;

    constructor(json: any) {
        this.token = json?.token ?? 0;
        this.userName = json?.userName ?? 'dvv';
        this.password = json?.password ?? 'asasd';
        this.jwtToken = json?.jwtToken ?? 'asd';
        this.fullName = json?.fullName ?? 'sd';
    }
}