import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numero=0;
  
  base:number = 1;
  
  historial: number[]=[];  


 acumular (base:number){
  this.numero+= base;
  this.historial.push(this.numero);
  
  
 }

 dibujar(){
   this.historial.forEach(function (num){
    
   });
  }

 reset(){
   this.historial=[]
    this.numero=0

 }


}
