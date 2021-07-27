import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public state: string;
  private currentPage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.state = "";
    this.currentPage = this.router.url;
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.authenticate("fsg","fsrgrw");
    this.router.navigate(["/"]);
    if(this.currentPage==="/"){
      location.reload();
    }
  }
}
