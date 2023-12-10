import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";
import { ListaFormulariosComponent } from "./lista-formularios/lista-formularios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormularioContactoComponent,ListaFormulariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jcr-ts-TA38-2-Componentes-git-081223';

  @ViewChild(ListaFormulariosComponent, {static : true}) listaContacto: ListaFormulariosComponent | undefined;

  ngOnInit() {
  }

  addNewRow(formData: string[]){
    console.log("Parend addNewRow");
    this.listaContacto?.addInRow(formData);
  }
}
