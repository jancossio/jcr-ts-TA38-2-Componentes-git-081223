import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-formularios',
  standalone: true,
  imports: [],
  templateUrl: './lista-formularios.component.html',
  styleUrl: './lista-formularios.component.css'
})
export class ListaFormulariosComponent {
  
  contactos: string[][] = [];

  addInRow(inRow: string[]){
    this.contactos.push(inRow);
  }
}
