import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SectorComponent } from './component/sector/sector.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeComponent } from './component/exchange/exchange.component';
import { AddExchangeComponent } from './component/add-exchange/add-exchange.component';
import { CompanyComponent } from './component/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    SectorComponent,
    ExchangeComponent,
    AddExchangeComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
