import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './component/add-company/add-company.component';
import { AddExchangeComponent } from './component/add-exchange/add-exchange.component';
import { AddIpoComponent } from './component/add-ipo/add-ipo.component';
import { CompanyComponent } from './component/company/company.component';
import { ComparisonComponent } from './component/comparison/comparison.component';
import { ExchangeComponent } from './component/exchange/exchange.component';
import { HomeComponent } from './component/home/home.component';
import { IpoComponent } from './component/ipo/ipo.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SectorComponent } from './component/sector/sector.component';
import { SignupComponent } from './component/signup/signup.component';
import { StockComponent } from './component/stock/stock.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'company', component: CompanyComponent },
  { path: 'addCompany', component: AddCompanyComponent},
  { path: 'comparison', component: ComparisonComponent },
  { path: 'exchange', component: ExchangeComponent},
  { path: 'addExchange', component: AddExchangeComponent},
  { path: 'ipo', component: IpoComponent },
  { path: 'addIpo', component: AddIpoComponent},
  { path: 'sector', component: SectorComponent},
  { path: 'stock', component: StockComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
