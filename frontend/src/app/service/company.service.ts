import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../model/Company';
import { Stock } from '../model/Stock';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiHome: string;

  private apiPath: {[apiName:string]: string};

  constructor(private http: HttpClient) {
    this.apiHome = environment.apiUrl+"/company";
    this.apiPath = {
      getCompany: this.apiHome+"/getCompany",
      addCompany: this.apiHome+"/addCompany",
      updateCompany: this.apiHome+"/updateCompany",
      getCompanyById: this.apiHome+'/getCompany',
      deactivateCompany: this.apiHome+"/deactivateCompany",
      getCompanyByPattern: this.apiHome+"/getCompanyByPattern",
      addStock: this.apiHome+"/addStock"
    };
  }

  public getCompany(): Observable<Company[]>{
    return this.http.get<Company[]>(this.apiPath.getCompany);
  }

  public addCompany(company: Company): Observable<Company>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    return this.http.post<Company>(this.apiPath.addCompany, company, {headers: httpHeaders});
  }

  public updateCompany(company: Company): Observable<Company>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    var id: number = company.id;
    return this.http.put<Company>(this.apiPath.updateCompany+"/"+id, company, {headers: httpHeaders});
  }

  public deactivateCompany(id: number): Observable<Company>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    return this.http.delete<Company>(this.apiPath.deactivateCompany+"/"+id, {headers: httpHeaders});
  }

  public getCompanyByPattern(pattern: string): Observable<Company[]>{
    return this.http.get<Company[]>(this.apiPath.getCompanyByPattern+"/"+pattern);
  }

  public addStock(stock: Stock){
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    return this.http.post<Stock>(this.apiPath.addStock, stock, {headers: httpHeaders});
  }

  public getCompanyById(id: number): Observable<Company>{
    return this.http.get<Company>(this.apiPath.getCompanyById+'/'+id);
  }
}
