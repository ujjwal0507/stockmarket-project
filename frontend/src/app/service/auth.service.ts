import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  private userArray: User[];

  constructor() {
    this.user = {
      username: "",
      password: "",
      role: "unauth"
    };
    this.userArray = [
      {
          username: "user",
          password: "user",
          role: "user"
        },
        {
          username: "admin",
          password: "admin",
          role: "admin"
        }
      ];
    }

    authenticate(username: string, password: string){
      var user: User = this.userArray[0];
      var admin: User = this.userArray[1];
      if(user.username===username && user.password===password){
        this.user = user;
      }
      else if(admin.username===username && admin.password===password){
        this.user = admin;
      }
      else{
        this.user = {
          username: "",
          password: "",
          role: "unauth"
        };
      }
    }

    getState(): string{
      return !this.user.role?"unauth":this.user.role;
    }
}

interface User{
  username: string;
  password: string;
  role: string;
}
