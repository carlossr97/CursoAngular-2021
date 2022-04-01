import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  constructor() { }

@Input() personajes:any[]=[];
  

}
