import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';


import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contadorModule/contador.module';
import { DBZModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HeroesModule,
    ContadorModule,
    DBZModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
