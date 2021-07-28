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

  private apiHome: string;

  private apiPath: {[apiName:string]: string};

  constructor(private http: HttpClient) {
    this.apiHome = environment.apiUrl+"/sector";
    this.apiPath = {
      "getSector": this.apiHome+"/getSector",
      "getCompanyBySector": this.apiHome+"/getCompany"
    }
  }

  getSector(): Observable<Sector[]>{
    return this.http.get<Sector[]>(this.apiPath.getSector);
  }

  getCompanyBySector(id: number): Observable<Company[]>{
    return this.http.get<Company[]>(this.apiPath.getCompanyBySector+"/"+id);
  }
}
