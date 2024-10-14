import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { catchError } from 'rxjs/operators'; // Para manejar errores
import { of } from 'rxjs'; // Para devolver un observable vacío en caso de error

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
      const formData = this.contactForm.value;

      this.http.post('http://localhost:3000/api/formulario', formData)
        .pipe(
          catchError(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un problema al enviar tu consulta.'+ error.message); // Mensaje de error al usuario
            return of(null); // Devuelve un observable vacío
          })
        )
        .subscribe(response => {
          if (response) {
            console.log('Respuesta del servidor:', response);
            alert('Consulta enviada correctamente.'); // Mensaje de éxito
            this.contactForm.reset(); // Limpiar el formulario
          }
        });
    } else {
      // Puedes manejar los errores aquí si lo deseas
      console.log('El formulario contiene errores');
      
      // Marca todos los campos como tocados para mostrar los mensajes de error
      this.contactForm.markAllAsTouched();
    }
  }
}
