export class Expense {
    public expenseTypeId:number;
    public expenseType:string;
    public amount:number;
    public fromDate:string;
    public toDate:string;
    public remark: string;

    constructor(json: any) {
        this.expenseTypeId = json.expenseTypeId ? json.expenseTypeId : 0;
        this.expenseType = json.expenseType ? json.expenseType : 0;
        this.amount = json.amount ? json.amount : 0;
        this.fromDate = json.fromDate ? json.fromDate : 0;
        this.toDate = json.toDate ? json.toDate : 0;
        this.remark = json.remark ? json.remark : 0;
    }
    
}
