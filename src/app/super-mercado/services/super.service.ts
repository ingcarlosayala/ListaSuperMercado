import { Injectable, OnInit } from '@angular/core';
import { Super } from '../interfaces/super.interface';
import { stringify, v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor() { this.loadLocaStorage() }

  private _listaSuper:Super[] = [];

  //Lista
  get listaSuper(){
    return [...this._listaSuper];
  }

  //Agregar
  addSuper(alimento: Super){
    if(alimento.nombre.length === 0) return;
    const valor:Super = { 
      id: uuid(),
      nombre:alimento.nombre
    }
    this._listaSuper.unshift(valor);
    this.saveLocalStorage();
  }

  //Eliminar
  deleteSuper(id: string){
     this._listaSuper = this._listaSuper.filter(alimento => alimento.id !== id);
  }

  private saveLocalStorage() {
    // Save the user name to localStorage
    localStorage.setItem('alimento', JSON.stringify(this._listaSuper));
  }

  private loadLocaStorage(){
    const temporal = localStorage.getItem('alimento');
    if(!temporal) return;

    this._listaSuper = JSON.parse(localStorage.getItem('alimento')!);
  }

}
