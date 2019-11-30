import { Component, OnInit } from '@angular/core';
import { Bank } from '../ViewModels/bank';
import { ActivatedRoute } from '@angular/router';
import { BankProcessService } from '../Services/bank-process.service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {
// NewBank:Bank;
oldBank:Bank;
updateBank:Bank;
  constructor(private Activated_Route: ActivatedRoute,private bankProcess:BankProcessService) { 
    this.updateBank=new Bank(0,"");
    this.oldBank=new Bank(0,"");
  }

  ngOnInit() {
    const selectedUserID = this.Activated_Route.snapshot.params['id'];
    console.log(selectedUserID);
    this.bankProcess.getBankById(selectedUserID).subscribe((res)=>{
      this.oldBank=res;
      console.log(this.oldBank);
    },(err)=>{console.log(err)});
  }
 
  onSubmit(){  
    this.updateBank=this.oldBank;
    this.bankProcess.updateBank(this.updateBank).
    subscribe((res)=>{console.log(res)},(err)=>{console.log(err)});}

    
}
