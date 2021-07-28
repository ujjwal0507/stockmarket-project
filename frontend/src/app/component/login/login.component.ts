import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public state: string;

  public username: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.state = authService.getState();
    console.log(this.state);
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.authenticate(this.username, this.password);
    this.router.navigate(['/']);
  }

}
