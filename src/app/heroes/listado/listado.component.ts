import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  constructor() { }

  heroes: string[] = ['batman','hulk','spiderman','capitan america'];
  name: string = 'hulk';
  ListaVacia=false;
  heroesBorrados:any = [];
  
  delete(){
    
    this.heroesBorrados.push(this.heroes.shift())
    
    if(this.heroes.length==0){
      this.ListaVacia=true;
      console.log(this.heroes)
    }
    
  }
  
  search(arr:any ,name:string){
    this.heroes = arr.filter(function(value:any){  
      
      return value == name;
     
    })
  }



}
