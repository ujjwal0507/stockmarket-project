import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private exchangeService: ExchangeService, private router: Router) {
    this.state = authService.getState();
    this.exchange = {
      id: 0,
      "name": "",
      "brief": "",
      "address": {
          "street": "",
          "city": "",
          "country": "",
          "zip": 0
      },
      "remark": ""
    };
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.exchangeService.addExchange(this.exchange).subscribe((exchange)=>console.log("Exchange added: "+exchange));
    this.router.navigate(['/exchange']);
  }

}
