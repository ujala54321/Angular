import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj: LoginModel  = new LoginModel();
  router= inject(Router)

  onLogin() {
    if(this.loginObj.email == "admin@gmail.com" && this.loginObj.password =="223344") {
      localStorage.setItem("loginName",'admin@gmail.com')
      this.router.navigateByUrl("/data-binding")
    } else {
      alert("Wrong Credentials")
    }
  }
}

class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

