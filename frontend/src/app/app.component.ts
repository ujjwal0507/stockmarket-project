import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { StockPriceService } from './service/stock-price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
  }
}
