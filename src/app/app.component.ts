import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title:string;
 public peliculas:string ;
 public actor:string ;
 public anio:number;
 public mostrardatos:boolean;

 constructor (){

   this.mostrardatos = true;
   this.title = 'Peliculas';
   this.peliculas = 'Batman vs superman';
   this.actor = 'Zarck Snider';
   this.anio = 2019;
   this.holamundo2();
   this.debug();
 }

 holamundo2 (){
  alert("Peliculas:  "+this.peliculas+"  -  "+this.actor+"  - "+this.anio);

 }

 debug (){
  console.log("Tu Tranquilo "+this.peliculas);

 }

 onShowHide (value){
  this.mostrardatos = true;  
}
 


}
