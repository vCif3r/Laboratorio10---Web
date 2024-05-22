import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const nombre = this.formulario.value.nombre;
      const email = this.formulario.value.email;
      console.log('Formulario enviado');
      console.log(`Nombre: ${nombre}`);
      console.log(`Email: ${email}`);
      this.showDataInNewWindow(nombre, email);
    }
  }

  confirmSubmit(event: Event) {
    event.preventDefault();
    if (confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      this.onSubmit();
    }
  }

  showDataInNewWindow(nombre: string, email: string) {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`<p>Nombre: ${nombre}</p>`);
      newWindow.document.write(`<p>Email: ${email}</p>`);
    } else {
      console.error('No se pudo abrir una nueva ventana');
    }
  }
}
