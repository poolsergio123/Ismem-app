import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth.service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string="";
  contrasena:string="";
  login1:boolean=false;
  constructor(private Af:AngularFireAuth,private router : Router,private authService: AuthServiceService) { }

  async login() {
    try {
      const respo = await this.Af.signInWithEmailAndPassword(this.email, this.contrasena);
      if (respo.user) {
        this.authService.setLoggedIn(true); // Marca como autenticado
        this.router.navigate(['/folder/inbox']); // Redirigir al login si no está autenticado
        console.log("Login exitoso:", respo.user);
      }
    } catch (err) {
      console.log("Error en login:", err);
    }
  }

  asignar():boolean{

    return true;
  }


  ngOnInit() {
  }

}
