import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../../Services/expense-service.service';
import { Expense } from '../../Module/expense';

@Component({
 
  templateUrl: './expense-types.component.html'
  
})
export class ExpenseTypesComponent implements OnInit {

  expenseTypesList: Array<Expense> = [];
  expense:Expense=new Expense();
  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit() {
    this.expenseService.getExpenseTypes().subscribe(data => {
      this.expenseTypesList=data;
     })
  }

  addExpenseTypes(expenseName):void{
    if(expenseName.expenseType!=""){
     this.expenseService.addExpenseType(expenseName).subscribe(data => {
   this.expense=data;
      this.expenseTypesList.push(this.expense);
      alert("Added Successfully")
     })
   };
  }
}
