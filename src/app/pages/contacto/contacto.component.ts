import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
      comment: ['', Validators.required],
      companyRut: ['', [Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9kK]$')]], // Validación para RUT (Chile)
      businessName: ['', Validators.required], // Campo obligatorio
      address: ['', Validators.required] // Campo obligatorio
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Envía el formulario usando EmailJS
      emailjs
        .send(
          'service_p96jn2s', // Reemplaza con tu Service ID
          'contacto', // Reemplaza con tu Template ID
          formData,
          'xAZsWmskyb37Mdp0a' // Reemplaza con tu Public Key
        )
        .then(
          response => {
            console.log('Correo enviado con éxito!', response.status, response.text);
            alert('Consulta enviada correctamente, pronto nos comunicaremos con usted.');
            this.contactForm.reset();
          },
          error => {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un problema al enviar tu consulta.');
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
