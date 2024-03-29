import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../../Services/expense-service.service';
import { Expense } from '../../Module/expense';
import { FormGroup } from '@angular/forms';

@Component({
 
  templateUrl: './expense-detail.component.html'
  
})
export class ExpenseDetailComponent implements OnInit {
  expenseTypesList: Array<Expense> = [];
  expenseslst: Array<Expense> = [];
  validationFlag:boolean=true;
  expense:Expense=new Expense();
  expenseName:string;
  total:number=0;
  constructor(private expenseService: ExpenseServiceService) { }
  ngOnInit() {
    this.expenseService.getExpenseTypes().subscribe(data => {
      this.expenseTypesList=data;
     })
  }
  selectchange(args){ 
    this.expenseName = args.target.options[args.target.selectedIndex].text; 
  } 
  getExpensess(selectedDate){
    this.total=0;
    this.expenseService.getExpenseByDate(selectedDate).subscribe(data => {
      this.expenseslst=data;
      this. expenseslst.forEach(element => {
        this.total = this.total + (element.amount);
        
        });
     
      })
  }
  addExpenseDtls(expenseDetails):void{
    this.validationFlag=true;
    
    this.expense=expenseDetails;
    this.expense.expenseType=this.expenseName;
    this.checkValidation();
    if(this.validationFlag){
      this.expenseService.addExpenseDtls(this.expense).subscribe(data => {
        if(this.expenseslst==null){
          this.expenseslst= [];
        }
      this.expenseslst.push(data);
       // this.total = this.total + parseInt(this.expense.amount);
      //this.total=(this.total)+(this.expense.amount);
      alert("Successfully Added");
      })
    }
   
  };
  checkValidation(){
    if(this.expense.expenseTypeId==undefined){
      alert("Please Select Expense Type");
      this.validationFlag= false;
    }
    if(this.expense.amount==undefined){
      alert("Please Enter Amount");
      this.validationFlag= false;
    }
    if(this.expense.fromDate==undefined){
      alert("Please Enter From Date ");
      this.validationFlag= false;
    }
    
  }
}
