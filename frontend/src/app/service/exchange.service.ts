import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exchange } from '../model/Exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private apiHome: string;

  private apiPath: {[apiName:string]: string};

  constructor(private http: HttpClient) {
    this.apiHome = environment.apiUrl+"/exchange";
    this.apiPath = {
      "getAllExchange": this.apiHome+"/getExchange",
      "addExchange": this.apiHome+"/addExchange",
    }
  }

  getAllExchanges(): Observable<Exchange[]>{
    return this.http.get<Exchange[]>(this.apiPath.getAllExchange);
  }

  addExchange(exchange: Exchange): Observable<any>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    return this.http.post<Exchange>(this.apiPath.addExchange, exchange, {headers: httpHeaders});
  }

}
