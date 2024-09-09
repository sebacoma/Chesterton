import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Aquí puedes manejar el envío del formulario
      console.log(this.contactForm.value);
    } else {
      // Puedes manejar los errores aquí si lo deseas
      console.log('El formulario contiene errores');
      
      // Marca todos los campos como tocados para mostrar los mensajes de error
      this.contactForm.markAllAsTouched();
    }
  }
}
