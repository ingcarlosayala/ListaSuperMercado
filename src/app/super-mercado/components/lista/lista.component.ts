import { Component } from '@angular/core';
import { SuperService } from '../../services/super.service';
import { Super } from '../../interfaces/super.interface';

@Component({
  selector: 'super-lista',
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent {

  constructor( private superServise: SuperService ) { }

  //Lista
  get listaSuper(){
    return this.superServise.listaSuper;
  }

  //Eliminar
  deleteSuper(id?: string){
    if(!id) return;
    this.superServise.deleteSuper(id);
  }

}
