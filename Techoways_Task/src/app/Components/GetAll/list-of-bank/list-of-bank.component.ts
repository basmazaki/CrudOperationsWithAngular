import { Component, OnInit } from '@angular/core';
import { GetAllBanksService } from '../Services/get-all-banks.service';
import { Bank } from '../ViewModels/bank';
import { BankProcessService } from '../Services/bank-process.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-bank',
  templateUrl: './list-of-bank.component.html',
  styleUrls: ['./list-of-bank.component.css']
})
export class ListOfBankComponent implements OnInit {
  GetAllBanks:Bank[];
  constructor(private getAllBanks:GetAllBanksService,private bankProcess:BankProcessService,private router:Router) { }

  ngOnInit() {
    this.getAllBanks.GetAllBanks().subscribe
    ((res)=>{this.GetAllBanks=res;
    console.log(res);
  })
  }
  Delete(id:number)
  {
    console.log(id);
    this.bankProcess.DeleteBank(id).subscribe(
      res => {
        console.log(res);
        });
        // this.router.navigate(['\home']); 
 
}
}