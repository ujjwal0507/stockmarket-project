import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/model/Exchange';
import { AuthService } from 'src/app/service/auth.service';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {

  public state: string;

  public exchange: Exchange;

  constructor(private authService: AuthService, private exchangeService: ExchangeService) {
    this.state = authService.getState();
    this.exchange = {
      "name": "New York Stock Exchange",
      "brief": "Brief 3",
      "address": {
          "street": "Wall Street",
          "city": "New York",
          "country": "USA",
          "zip": 10005
      },
      "remark": "Remark 3"
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.exchangeService.addExchange(this.exchange).subscribe((exchange)=>console.log("Exchange added: "+exchange));
  }

}
