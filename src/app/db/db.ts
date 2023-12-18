import Dexie, { Table } from 'dexie';
import { liveQuery } from 'dexie';
import { Opinion } from "./opiniones.model";

export class AppDB extends Dexie {
  opiniones!: Table<Opinion, number>;
  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      opiniones: 'Id, Nombre, Apellido, Titulo, Opinion'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {

    await db.opiniones.bulkAdd([
      {
        Id: 1,
        Nombre: 'Miguel',
        Apellido: 'Loza',
        Titulo: 'Problemas en el Paraizo',
        Opinion: 'Lo que no podemos ver se esconde en la realidad'
      },
      {
        Id: 2,
        Nombre: 'Maria',
        Apellido: 'Sossa',
        Titulo: 'Ejercita tu Tranquilidad',
        Opinion: 'No Dejes Nada en tu interior'
      }
    ]);
  }
  
}

export const db = new AppDB();