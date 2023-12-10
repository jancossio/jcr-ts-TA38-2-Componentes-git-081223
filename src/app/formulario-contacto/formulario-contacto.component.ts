import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.css'
})
export class FormularioContactoComponent {

  GrupoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('',  Validators.required),
    respuesta: new FormControl('', Validators.required)
  });

  constructor(){}

  @Output() onGuardar: EventEmitter<string[]> = new EventEmitter<string[]>();


  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.GrupoForm.value);
  }

  send_info = (): void => {
    if(parseInt(this.GrupoForm.value.respuesta!) !== 5){
      alert("No has pasado la Validacion anti-spam!");
    }else{
      let formData: string[] = [];
      formData.push(this.GrupoForm.value.name!);
      formData.push(this.GrupoForm.value.email!);
      formData.push(this.GrupoForm.value.mensaje!);
      formData.push(this.GrupoForm.value.respuesta!);
      this.onGuardar.emit(formData);
    }
  }
}