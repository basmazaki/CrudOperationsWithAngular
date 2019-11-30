import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewBankComponent } from './Components/GetAll/AddNewBank/add-new-bank/add-new-bank.component';
import { ListOfBankComponent } from './Components/GetAll/list-of-bank/list-of-bank.component';
import { UpdateBankComponent } from './Components/GetAll/update-bank/update-bank.component';

const routes: Routes = [
  {path:'AddNewBank' , component:AddNewBankComponent},
  {path:'home' , component:ListOfBankComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'Update/:id' ,component:UpdateBankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
