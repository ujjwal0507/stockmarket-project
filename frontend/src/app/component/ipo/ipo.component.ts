import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/model/IPO';
import { AuthService } from 'src/app/service/auth.service';
import { IpoService } from 'src/app/service/ipo.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  public state: string;

  public ipos: IPO[];

  public dropDownTitle: string;
  public ipoSelected: IPO;
  public filteredIpo: IPO[];

  constructor(private authService: AuthService, private ipoService: IpoService) {
    this.state = authService.getState();
    this.ipos = [];
    this.dropDownTitle = "Please select an IPO";
    this.ipoSelected = {
      "id": 0,
      "company": {
          "id": 9,
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
    this.filteredIpo = [];
  }

  ngOnInit(): void {
    this.ipoService.getIpo().subscribe((ipos)=>{
      this.ipos = ipos;console.log(ipos);
      this.filteredIpo = this.ipos;
    });
  }

  onIpoSelected(ipo: IPO){
    this.dropDownTitle = ipo.company.name;
    this.ipoSelected = ipo;
    this.filteredIpo = [ipo];
  }

  clearFilter(){
    this.filteredIpo = this.ipos;
    this.dropDownTitle = "Please select an IPO"
    this.ipoSelected = {
      "id": 0,
      "company": {
          "id": 9,
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
  }

}
