import { Component } from '@angular/core';
import { SuperService } from '../../services/super.service';
import { Super } from '../../interfaces/super.interface';

@Component({
  selector: 'super-formulario',
  templateUrl: './formulario.component.html',
  styles: ``
})
export class FormularioComponent {

  constructor( private superService:SuperService ) { }

  public alimentos:Super = {
    nombre: ''
  };

  //Agregar
  addSuper(){
    this.superService.addSuper(this.alimentos);
    this.alimentos = {
      nombre: ''
    }
  }

  removerLocalstorage(){
    localStorage.clear();
  }
}
