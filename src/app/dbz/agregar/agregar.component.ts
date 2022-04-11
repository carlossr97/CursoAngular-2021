import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from 'src/app/dbz/main-page/main-page.component'
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})


export class AgregarComponent  {

  constructor(  
    private servicio:ServiceService
  ) { }
  @Input() personajes:any[]=[];
  @Input() nuevo:Personaje={
    nombre:'',
    poder:0
  };

  // @Output() OnNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();  


  

  agregar(){
  
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    
    this.servicio.agregarPersonaje(this.nuevo);
    
    this.nuevo={
      nombre:"",
      poder:0
    }
  
   }

   

}
