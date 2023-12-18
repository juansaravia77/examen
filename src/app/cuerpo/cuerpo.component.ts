import { Component } from '@angular/core';
import { ServiciosService } from '../db/servicios.service';
import { Persona } from '../db/persona.model';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  persona : Persona = new Persona;
  constructor(public personaService : ServiciosService) {
    this.persona = this.personaService.getInformacionPersona();
    console.log(this.persona);
  }
}
