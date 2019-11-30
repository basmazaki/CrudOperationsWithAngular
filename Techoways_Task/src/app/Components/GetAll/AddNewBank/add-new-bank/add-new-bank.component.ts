import { Component, OnInit } from '@angular/core';
import { Bank } from '../../ViewModels/bank';
import { BankProcessService } from '../../Services/bank-process.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { transitiveScopesFor } from '@angular/core/src/render3/jit/module';
import { GetAllBanksService } from '../../Services/get-all-banks.service';
@Component({
  selector: 'app-add-new-bank',
  templateUrl: './add-new-bank.component.html',
  styleUrls: ['./add-new-bank.component.css']
})
export class AddNewBankComponent implements OnInit {
bank:Bank;

  constructor(private bankProcess:BankProcessService,private router:Router, private location: Location) {
    this.bank=new Bank(0,"");
   }

  ngOnInit() {
  }
  onSubmit()
  {
    this.bankProcess. insertBank(this.bank).subscribe(
      (data) => {console.log (JSON.stringify(data)); },
      (err) => {console.log(err);
        this.router.navigate(['\home']);
      });
     
   
    
  }
  goBack() {
    this.location.back();
  }

}
