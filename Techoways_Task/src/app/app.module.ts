import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfBankComponent } from './Components/GetAll/list-of-bank/list-of-bank.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewBankComponent } from './Components/GetAll/AddNewBank/add-new-bank/add-new-bank.component';
import {FormsModule} from '@angular/forms';
import { UpdateBankComponent } from './Components/GetAll/update-bank/update-bank.component';
import { DeleteBankComponent } from './Components/GetAll/delete-bank/delete-bank.component';
@NgModule({
  declarations: [
    AppComponent,
    ListOfBankComponent,
    AddNewBankComponent,
    UpdateBankComponent,
    DeleteBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
