export class FdSummary {
    public nofFd:number;
	public fdAmount:number;
	public paidInterest:number;
	public pendingIntrest:number;
	public closedFd:number;
	public clodedFDAmount:number;

    constructor(json: any) {
        this.nofFd = json.nofFd ? json.nofFd : 0;
        this.fdAmount = json.fdAmount ? json.fdAmount : 0;
        this.paidInterest = json.paidInterest ? json.paidInterest : 0;
        this.pendingIntrest = json.pendingIntrest ? json.pendingIntrest : 0;
        this.closedFd = json.closedFd ? json.closedFd : 0;
        this.clodedFDAmount = json.clodedFDAmount ? json.clodedFDAmount : 0;
    }
}
