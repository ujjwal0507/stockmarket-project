import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { Sector } from 'src/app/model/Sector';
import { AuthService } from 'src/app/service/auth.service';
import { SectorService } from 'src/app/service/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  public state: string;
  public sectors: Sector[];
  public companies: Company[];
  public dropdownTitle: string;
  private sectorSelected: Sector;

  constructor(private authService: AuthService, private sectorService: SectorService) {
    this.state = authService.getState();
    this.sectors = [];
    this.companies = [];
    this.dropdownTitle = "Please Select Sector";
    this.sectorSelected = {
      id: 0,
      name: "",
      brief: ""
    };
  }

  ngOnInit(): void {
    this.sectorService.getSector().subscribe((sectors)=>{
      this.sectors = sectors;
    });
    console.log(this.sectors);
  }

  onSectorClick(sector: Sector){
    this.dropdownTitle = sector.name;
    this.sectorSelected = sector;
  }

  onShowCompaniesClicked(){
    if(this.sectorSelected.id===0){
      alert("Please select a sector");
      return;
    }
    this.sectorService.getCompanyBySector(this.sectorSelected.id).subscribe((companies)=>{
      this.companies = companies;
    });
  }

}
