export class Expense {
    public expenseTypeId:number;
    public expenseType:string;
    public amount:number;
    public fromDate:string;
    public toDate:string;
    public remark: string;

    constructor(json: any) {
        this.expenseTypeId = json && json.expenseTypeId ? json.expenseTypeId : 0;
        this.expenseType = json && json.expenseType ? json.expenseType : 0;
        this.amount = json && json.amount ? json.amount : 0;
        this.fromDate = json && json.fromDate ? json.fromDate : 0;
        this.toDate = json && json.toDate ? json.toDate : 0;
        this.remark = json && json.remark ? json.remark : 0;
    }
    
}
