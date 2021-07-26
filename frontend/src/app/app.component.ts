import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { StockPriceService } from './service/stock-price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private stockPriceService: StockPriceService){
    authService.authenticate("admin", "admin");
    stockPriceService.getStockPrice(1,1,"2021-07-20T01:30:00.000+00:00","2021-07-20T14:50:00.000+00:00")
  }
}
