import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/service/exchange.service';
import { Exchange } from 'src/app/model/Exchange';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  public state: string;

  public exchanges: Exchange[];

  constructor(private authService: AuthService, private exchangeService: ExchangeService) {
    this.state = authService.getState();
    this.exchanges = [];
  }

  ngOnInit(): void {
    this.exchangeService.getAllExchanges().subscribe((exchanges)=>{
      this.exchanges = exchanges;
    });
  }

}
