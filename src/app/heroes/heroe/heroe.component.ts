import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  constructor() { }

  nombre: string = 'ironman';
  edad: number = 25;


  obtenerNombre():string{
    return `El nombre es ${this.nombre}`
  }

  get nombrecapitalizado(){
    return  this.nombre.toUpperCase();
  }

  cambiarNombre(){
    this.nombre = "batman";
  }
 
  cambiarEdad(){
    this.edad=22;
  }


}
