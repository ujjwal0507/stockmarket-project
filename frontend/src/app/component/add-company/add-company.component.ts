import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { Sector } from 'src/app/model/Sector';
import { AuthService } from 'src/app/service/auth.service';
import { CompanyService } from 'src/app/service/company.service';
import { SectorService } from 'src/app/service/sector.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public state: string;

  public company: Company;

  public sectors: Sector[];

  public dropdownTitle: string;

  constructor(private authService: AuthService, private companyService: CompanyService, private sectorService: SectorService, private router: Router) {
    this.state = authService.getState();
    this.company = {
      id:0,
      name: "",
      turnover: 0,
      ceo: "",
      brief: "",
      directors: "",
      sector: {
          id: 0,
          name: "",
          brief: ""
      }
    }
    this.sectors = [];
    this.dropdownTitle = "Please select the sector"
  }

  ngOnInit(): void {
    this.sectorService.getSector().subscribe((sectors)=>this.sectors = sectors);
  }

  onSubmit(){
    this.companyService.addCompany(this.company).subscribe(company=>{
      console.log(company);
    });
    this.router.navigate(['/company']);
  }

  onSectorSelected(sector: Sector){
    this.company.sector = sector;
    this.dropdownTitle = sector.name;
  }

  onReset(): void{
    this.company = {
      id:0,
      name: "",
      turnover: 0,
      ceo: "",
      brief: "",
      directors: "",
      sector: {
          id: 0,
          name: "",
          brief: ""
      }
    }
    this.dropdownTitle = "Please select the sector";
  }
}
