import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  correo:string="";
  contrasenna:string="";
  error:string="";
  constructor(private AfAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  registrar(){

    return this.AfAuth.createUserWithEmailAndPassword(this.correo, this.contrasenna)
      .then((res)=>{
        this.correo="";
        this.contrasenna="";
        console.log("Registro Exitoso",res);
      })
      .catch((err)=>{
        console.log("Error al registrar",err);
        this.error=err;
      });

  }

}
