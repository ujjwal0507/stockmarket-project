import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public state: string;

  constructor(private authService: AuthService, private router: Router) {
    this.state = "";
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.authenticate("fsg","fsrgrw");
    this.router.navigate([""]);
    // location.reload();
  }
}
