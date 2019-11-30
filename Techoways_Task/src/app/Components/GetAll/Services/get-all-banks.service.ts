import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from '../ViewModels/bank';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAllBanksService {

  constructor(private http:HttpClient) { }
  GetAllBanks() : Observable<Bank[]>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        
        // 'Accept': ' */*',
        
        // 'Authorization': `Bearer ${localStorage.getItem('Token')}`

        // 'Content-Type':'application/json',
        'Accept': ' */*',
    // 'Authorization': `Bearer ${localStorage.getItem('Token')}`

      })
    };

return this.http.get<Bank[]>(`${environment.url}`,httpOptions);

  }

}








