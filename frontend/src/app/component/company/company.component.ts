import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { AuthService } from 'src/app/service/auth.service';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public state: string;

  public companies: Company[];

  public pattern: string;

  constructor(private authService: AuthService, private companyService: CompanyService) {
    this.state = authService.getState();
    this.companies = [];
    this.pattern = "";
  }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe((companies)=>this.companies = companies);
  }

  public getCompanies(){
    if(this.pattern){
      this.companyService.getCompanyByPattern(this.pattern).subscribe((companies)=>{this.companies = companies;})
    }
    else{
      this.companyService.getCompany().subscribe((companies)=>{this.companies = companies;});
    }
  }

  public deactivateCompany(id: number){
    this.companyService.deactivateCompany(id).subscribe((deactivatedCompany)=>{
      this.pattern = "";
      this.companyService.getCompany().subscribe((companies)=>{this.companies = companies;});
    });
  }
}
