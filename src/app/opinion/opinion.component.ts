import { Component, Input } from '@angular/core';
import { ServiciosService } from '../db/servicios.service';
import { liveQuery } from 'dexie';
import { db } from '../db/db';
import { Opinion } from '../db/opiniones.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opinion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './opinion.component.html',
  styleUrl: './opinion.component.css'
})
export class OpinionComponent {
  @Input() opinion!: Opinion;
  NombreAutor:string = '';
  ApellidoAutor:string = '';
  TituloOpinion:string = '';
  OpinionTexto:string = '';
  IdOpinion:number = 10;
  NroId:number=this.IdOpinion;
  listaOpiniones = liveQuery(() => db.opiniones.toArray());
  opiniones : Opinion[] = [];

  constructor() {
    this.listaOpiniones.subscribe(
      (Opinion) => {
        this.opiniones = Opinion;
        console.log(Opinion)},
      (error) => {console.log(error)}
    );
  }
  async addItem() {
    this.NroId++;
    await db.opiniones.add({
      Nombre: this.NombreAutor,
      Apellido : this.ApellidoAutor,
      Titulo : this.TituloOpinion,
      Opinion : this.OpinionTexto,
      Id: this.NroId,
    });
    this.reset();
  }
  reset() {
    this.NombreAutor = '';
    this.ApellidoAutor = '';
    this.TituloOpinion = '';
    this.OpinionTexto = '';
  }
  
}
