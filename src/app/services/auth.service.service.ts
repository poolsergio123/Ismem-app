import { Injectable } from '@angular/core';
import { LoginPageModule } from '../login/login.module';
import { LoginPage } from '../login/login.page';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private auth=false;

  setLoggedIn(vasr:boolean) {
    this.auth=vasr;
    return this.auth;
  }

  isLoggedIn(){
    return this.auth;
  }
  login(){
    this.auth=true
    return true;
  }
  logout(){
    return false;
  }

}
