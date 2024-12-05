import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
})
export class ClasesComponent  implements OnInit {

  clases:any=[];

  constructor(private http:HttpClient) {
    const url = `http://localhost:8000/api/clases`;
    this.http.get(url).subscribe(data=>{
      console.log("Datos",data);
      this.clases =data;
    })
  }

  ngOnInit() {}

}
