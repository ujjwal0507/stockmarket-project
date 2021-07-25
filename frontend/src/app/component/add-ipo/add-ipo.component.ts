import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { Exchange } from 'src/app/model/Exchange';
import { IPO } from 'src/app/model/IPO';
import { AuthService } from 'src/app/service/auth.service';
import { CompanyService } from 'src/app/service/company.service';
import { ExchangeService } from 'src/app/service/exchange.service';
import { IpoService } from 'src/app/service/ipo.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  public state: string;

  public ipo: IPO;

  public exchanges: Exchange[];
  public companies: Company[];

  public companyTitle: string;
  public exchangeTitle: string;

  constructor(private authService: AuthService, private companyService: CompanyService, private exchangeService: ExchangeService, private ipoService: IpoService) {
    this.state = this.authService.getState();
    this.ipo = {
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
      "pricePerShare": 0,
      "totalShares": 0,
      "openDateTime": new Date(),
      "remarks": ""
    }
    this.companyTitle = "Please select a company.",
    this.exchangeTitle = "Please select an exchange."
    this.companies = [];
    this.exchanges = [];
  }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(companies=>this.companies = companies);
    this.exchangeService.getAllExchanges().subscribe(exchanges=> this.exchanges = exchanges);
  }

  onCompanySelected(company: Company){
    this.companyTitle = company.name;
    this.ipo.company = company;
  }

  onExchangeSelected(exchange: Exchange){
    this.exchangeTitle = exchange.name;
    this.ipo.exchange = exchange;
  }

  onSubmit(){
    var date: string = this.ipo.openDateTime+":00.000+05:30";
    this.ipo.openDateTime = new Date(date);
    console.log(this.ipo);
    this.ipoService.addIpo(this.ipo).subscribe(ipo=>{

    });
  }

  onReset(){
    this.companyTitle='Please select the company.';
    this.exchangeTitle='Please select the exchange.'
    this.ipo = {
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
      "pricePerShare": 0,
      "totalShares": 0,
      "openDateTime": new Date(),
      "remarks": ""
    }
  }

}
