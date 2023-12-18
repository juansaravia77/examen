import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OpinionComponent } from './opinion/opinion.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { Persona } from './db/persona.model';
import { Opinion } from './db/opiniones.model';
//import { db, Opinion } from './db/db';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule
    , RouterOutlet
    , EncabezadoComponent
    , CuerpoComponent
    , CarouselComponent
    , OpinionComponent
    , PiepaginaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reflexiones SCJ';
  persona: Persona = new Persona();

  mostrar(){
    console.log("desde el boton mostrar",this.persona);
  }
}
