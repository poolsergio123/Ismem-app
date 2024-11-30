import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent   {
  noticias:any;

  constructor(private db:AngularFireDatabase) {
    this.getNoticias().subscribe(data => {
      this.noticias  =data;
    })

  }
  getNoticias(){
    return this.db.list("noticias").valueChanges();
  }




}
