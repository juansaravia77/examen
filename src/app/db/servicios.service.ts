import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Opinion } from './opiniones.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  getInformacionPersona(){
    let persona = new Persona;
    persona.Id = 1;
    persona.Nombre = 'Juan';
    persona.Apellido = 'Saravia';
    persona.Edad = 40;
    return persona;
  }
  getInformacionOpinion(){
    let opinion = new Opinion;
    opinion.Id = 1;
    opinion.Nombre = 'Juan';
    opinion.Apellido = 'Saravia';
    opinion.Titulo = 'Registro de Opinones';
    opinion.Opinion = 'registre su opinion respecto a experiencias y vivencias personales';
    return opinion;
  }
}
