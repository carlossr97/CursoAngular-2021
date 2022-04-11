import { Injectable } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _personajes:Personaje[]=[
    {
      nombre:"goku",
      poder:15000 
    },
    {
      nombre:"vegeta",
      poder:12000
    }

  ];

  get personajes():Personaje[]{
    return[...this._personajes];
  }

  constructor() { }

  agregarPersonaje(personaje:Personaje){
  this._personajes.push(personaje)
}

}
