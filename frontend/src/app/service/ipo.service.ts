import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPO } from '../model/IPO';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  private apiHome: string;

  private apiPath: {[apiName:string]: string};

  constructor(private http: HttpClient) {
    this.apiHome = environment.apiUrl+"/company";
    this.apiPath = {
      getIpo: this.apiHome+"/getIpo",
      // addIpo: this.apiHome+"/addIpo",
      addIpo:"http://localhost:8082/company/ipo",
      updateIpo: this.apiHome+"/ipo",
      getIpoByCompany: this.apiHome+"/getIpoByCompany"
    }
  }

  public getIpo(): Observable<IPO[]>{
    return this.http.get<IPO[]>(this.apiPath.getIpo);
  }

  public addIpo(ipo: IPO): Observable<IPO>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    return this.http.post<IPO>(this.apiPath.addIpo, ipo, {headers: httpHeaders});
  }

  public update(ipo: IPO): Observable<IPO>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    var id: number = ipo.id;
    return this.http.put<IPO>(this.apiPath.updateIpo+"/"+id, ipo, {headers: httpHeaders});
  }

  public getIpoByCompany(id: number): Observable<IPO>{
    return this.http.get<IPO>(this.apiPath.getIpoByCompany+"/"+id);
  }
}
