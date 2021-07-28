import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public companyId: number;

  public exchanges: Exchange[];
  public companies: Company[];

  public companyTitle: string;
  public exchangeTitle: string;

  public openDateTime: Date;

  constructor(private authService: AuthService, private companyService: CompanyService, private exchangeService: ExchangeService, private ipoService: IpoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.state = this.authService.getState();
    this.companyTitle = "Please select a company.",
    this.exchangeTitle = "Please select an exchange."
    this.companies = [];
    this.exchanges = [];
    this.companyId = this.activatedRoute.snapshot.params["id"];
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
      "openDateTime": "",
      "remarks": ""
    }
    this.openDateTime = new Date();
  }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(companies=>this.companies = companies);
    this.exchangeService.getAllExchanges().subscribe(exchanges=> this.exchanges = exchanges);
    if(this.companyId){
      this.ipoService.getIpoByCompany(this.companyId).subscribe(ipo=> {
        this.ipo = ipo;
        console.log(this.ipo.openDateTime);
        this.companyTitle = this.ipo.company.name;
        this.exchangeTitle = this.ipo.exchange.name;
        this.ipo.openDateTime = this.ipo.openDateTime.substr(0,16);
      });
    }
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
    this.ipo.openDateTime = date;
    console.log(this.ipo);
    this.ipoService.addIpo(this.ipo).subscribe(ipo=>{

    });
    this.router.navigate(['/ipo']);
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
      openDateTime: "",
      "remarks": ""
    }
  }

}
