import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class SuperMercadoModule { }
