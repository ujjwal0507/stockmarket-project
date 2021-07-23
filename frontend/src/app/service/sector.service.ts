import { Injectable } from '@angular/core';
import { Sector } from '../model/Sector';
import { Company } from '../model/Company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiUrl: string;

  private api: {[apiName:string]: string};

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl+"/sector";
    this.api = {
      "getSector": this.apiUrl+"/getSector",
      "getCompanyBySector": this.apiUrl+"/getCompany"
    }
  }

  getSector(): Observable<Sector[]>{
    return this.http.get<Sector[]>(this.api.getSector);
  }

  getCompanyBySector(id: number): Observable<Company[]>{
    return this.http.get<Company[]>(this.api.getCompanyBySector+"/"+id);
  }
}
