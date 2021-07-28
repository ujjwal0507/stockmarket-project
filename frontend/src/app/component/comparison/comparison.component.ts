import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { Exchange } from 'src/app/model/Exchange';
import { StockPrice } from 'src/app/model/StockPrice';
import { AuthService } from 'src/app/service/auth.service';
import { CompanyService } from 'src/app/service/company.service';
import { ExchangeService } from 'src/app/service/exchange.service';
import { StockPriceService } from 'src/app/service/stock-price.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  public state: string;
  public stockPrices: StockPrice[][];

  public exchanges: Exchange[];
  public companies: Company[];

  public companySelected: Company;
  public exchangeSelected: Exchange;
  public fromTime: string;
  public toTime: string;

  public companyTitle: string;
  public exchangeTitle: string;

  public highcharts = Highcharts;
  public highchartOptions: Highcharts.Options;

  constructor(private authService: AuthService, private companyService: CompanyService, private exchangeService: ExchangeService, private stockPriceService:StockPriceService) {
    this.state = authService.getState();
    this.stockPrices = [];
    this.exchanges = [];
    this.companies = [];
    this.companyTitle = "Please select the company."
    this.exchangeTitle = "Please select the exchange."
    this.companySelected = {
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
    };
    this.exchangeSelected = {
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
    };
    this.fromTime = "";
    this.toTime = "";
    this.highchartOptions = {
      chart:{
        type: 'line'
      },
      title: {
        text: "Stock Price Comparison"
      },
      xAxis: {
        labels: {
          formatter: function () {
              var label = this.axis.defaultLabelFormatter.call(this).replace(" ","").replace("k","000").replace(" ","").replace(" ","").replace("M", "000000");
              var date: Date = new Date(parseInt(label));
              return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"\n"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          }
        }
      },
      yAxis: {
        title: {
          text: "Stock Price"
        }
      },
      series: [],
      legend: {
        title: {
            text: 'Stock<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
            style: {
                fontStyle: 'italic'
            }
        },
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 100
      },
    }
  }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(companies=>this.companies = companies);
    this.exchangeService.getAllExchanges().subscribe(exchanges=> this.exchanges = exchanges);
  }

  onCompanySelected(company: Company){
    this.companyTitle = company.name;
    this.companySelected = company;
  }

  onExchangeSelected(exchange: Exchange){
    this.exchangeTitle = exchange.name;
    this.exchangeSelected = exchange;
  }

  onReset(){
    this.companyTitle='Please select the company.';
    this.exchangeTitle='Please select the exchange.';
    this.companySelected = {
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
    };
    this.exchangeSelected = {
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
    };
  }

  public onSubmit(): void{
    this.fromTime+= ".000+05:30";
    this.toTime+= ".000+05:30";
    this.stockPriceService.getStockPrice(this.companySelected.id, this.exchangeSelected.id, this.fromTime, this.toTime).subscribe(stockPrices=>{
      if(stockPrices.length){
        this.stockPrices[this.stockPrices.length] = stockPrices;
        console.log(this.stockPrices);
        this.highchartOptions.series?.push(this.getPriceSeries(stockPrices));
        Highcharts.chart('chart-container', this.highchartOptions);
        console.log(this.highchartOptions.series);
      }
      else{
        alert("No Stock Prices found for the given input. Please try again.");
      }
    });
    this.onReset();
  }

  getPriceSeries(stockPrices: StockPrice[]):Highcharts.SeriesOptionsType{
    var seriesData: number[][] = [];
    for(var i=0;i<stockPrices.length;i++){
      seriesData[i] = [new Date(stockPrices[i].timestamp).valueOf(), stockPrices[i].price];
    }
    return {
      name: stockPrices[0].stock.stockCode,
      data: seriesData,
      type: "line"
    }
  }

}
