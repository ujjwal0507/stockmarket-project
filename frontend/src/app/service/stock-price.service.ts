import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExcelData } from '../model/ExcelData';
import { StockPrice } from '../model/StockPrice';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  private apiHome: string;

  private apiPath: {[apiName:string]: string};

  constructor(private http: HttpClient) {
    this.apiHome = environment.apiUrl;
    this.apiPath = {
      getStockPrice: this.apiHome+"/company/getStockPrice",
      addStockPrice: this.apiHome+"/excel/addStockPrice"
    }
  }

  public getStockPrice(companyId: number, exchangeId: number, fromTime: string, toTime: string): Observable<StockPrice[]>{
    return this.http.get<StockPrice[]>(this.apiPath.getStockPrice+`/companyId/${companyId}/exchangeId/${exchangeId}/fromTime/${encodeURIComponent(fromTime)}/toTime/${encodeURIComponent(toTime)}`);
  }

  public addStockPrice(excelData: ExcelData[]): Observable<ExcelData[]>{
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Origin", "*");
    return this.http.post<ExcelData[]>(this.apiPath.addStockPrice, excelData, {headers: httpHeaders});
  }
}
