import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent  {
  eventos:any=[];

  constructor(private http:HttpClient) {
    const url = `https://ismem.cesar.pe/api/eventos`;
    this.http.get(url).subscribe(data=>{
      console.log("Datos",data);
      this.eventos =data;
    })


  }



}
