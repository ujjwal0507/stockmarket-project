import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { Exchange } from 'src/app/model/Exchange';
import { Stock } from 'src/app/model/Stock';
import { AuthService } from 'src/app/service/auth.service';
import { CompanyService } from 'src/app/service/company.service';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public state: string;

  public stock: Stock;

  public exchanges: Exchange[];
  public companies: Company[];

  public companyTitle: string;
  public exchangeTitle: string;

  constructor(private authService: AuthService, private companyService: CompanyService, private exchangeService: ExchangeService, private router: Router) {
    this.state = authService.getState();
    this.stock = {
      "id": 0,
      "company": {
          "id": 0,
          "name": "",
          "turnover": 0,
          "ceo": "",
          "brief": "",
          "sector": {
              "id": 0,
              "name": "",
              "brief": ""
          },
          "directors": ""
      },
      "exchange": {
          "id": 0,
          "name": "",
          "brief": "",
          "address": {
              "id": 0,
              "street": "",
              "city": "",
              "country": "",
              "zip": 0
          },
          "remark": ""
      },
      "stockCode": ""
    }
    this.exchanges = [];
    this.companies = [];
    this.companyTitle = "Please select the company."
    this.exchangeTitle = "Please select the exchange."
  }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(companies=>this.companies = companies);
    this.exchangeService.getAllExchanges().subscribe(exchanges=> this.exchanges = exchanges);
  }

  onCompanySelected(company: Company){
    this.companyTitle = company.name;
    this.stock.company = company;
  }

  onExchangeSelected(exchange: Exchange){
    this.exchangeTitle = exchange.name;
    this.stock.exchange = exchange;
  }

  onSubmit(): void{
    console.log(this.stock);
    this.companyService.addStock(this.stock).subscribe(stock=>{

    });
    this.router.navigate(['/exchange']);
  }

  onReset(){
    this.companyTitle='Please select the company.';
    this.exchangeTitle='Please select the exchange.'
    this.stock = {
      "id": 0,
      "company": {
          "id": 0,
          "name": "",
          "turnover": 0,
          "ceo": "",
          "brief": "",
          "sector": {
              "id": 0,
              "name": "",
              "brief": ""
          },
          "directors": ""
      },
      "exchange": {
          "id": 0,
          "name": "",
          "brief": "",
          "address": {
              "id": 0,
              "street": "",
              "city": "",
              "country": "",
              "zip": 0
          },
          "remark": ""
      },
      "stockCode": ""
    }
  }

}
