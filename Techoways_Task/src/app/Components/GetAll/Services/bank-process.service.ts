import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Bank } from '../ViewModels/bank';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankProcessService {

  constructor(private httpclient: HttpClient) { }


  insertBank(newBank: Bank): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient
      .post<any>(`${environment.url}`, newBank, httpOptions);
  }


  getBankById(bankId: number): Observable<Bank> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };
    console.log(bankId);
    console.log(bankId);
    return this.httpclient.get<Bank>(`${environment.url}/${bankId}`, httpOptions);

  }


  DeleteBank(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient.delete<any>(`${environment.url}/${id}`, httpOptions)
  }



  updateBank(newBank: Bank): Observable<any> {
    console.log("services");
    console.log(JSON.stringify(newBank));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient
      .put<any>(`${environment.url}`, newBank, httpOptions);
  }

}
