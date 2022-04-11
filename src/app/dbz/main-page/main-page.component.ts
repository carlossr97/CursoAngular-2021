import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
export interface Personaje{
  nombre: string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {
  
  
  nuevo:Personaje=
    {nombre:"rocky",
    poder:12333}
  ;

  get personajes():Personaje[]{
    return this.servicio.personajes
  }

 

 cambiarNombre(event:any){
  
   if(event.inputType=="deleteContentBackward"){
    console.log("NO BORRES GIL");
   }
 }



 constructor( private servicio:ServiceService
   
 ) {
   
 }

}
