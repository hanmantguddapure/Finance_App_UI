export class Expense {
    expenseTypeId: number;
    expenseType: string;
    amount: number;
    fromDate: string;
    toDate: string;
    remark: string;

    constructor(json: any) {
        this.expenseTypeId = json?.expenseTypeId ?? 0;
        this.expenseType = json?.expenseType ?? 0;
        this.amount = json?.amount ?? 0;
        this.fromDate = json?.fromDate ?? 0;
        this.toDate = json?.toDate ?? 0;
        this.remark = json?.remark ?? 0;
    }
}
