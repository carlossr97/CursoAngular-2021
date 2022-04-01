import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {
  
  nuevo:Personaje= {
    nombre: "",
    poder: 0
  }
  
  personajes:Personaje[]=[
    {
      nombre:"goku",
      poder:15000 
    },
    {
      nombre:"vegeta",
      poder:12000
    }

  ];

 agregar(event:any){
  
  if(this.nuevo.nombre.trim().length===0){
    return;
  }
  console.log(this.nuevo.nombre);
  this.personajes.push(this.nuevo);
  this.nuevo={
    nombre:"",
    poder:0
  }

 }

 cambiarNombre(event:any){
  
   if(event.inputType=="deleteContentBackward"){
    console.log("NO BORRES GIL");
   }
 }

}
