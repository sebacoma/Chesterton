import { Component } from '@angular/core';

@Component({
  selector: 'app-proteccion-rodamientos',
  templateUrl: './proteccion-rodamientos.component.html',
  styleUrls: ['./proteccion-rodamientos.component.css']
})
export class ProteccionRodamientosComponent {
  seals = [
    { title: 'Sellos Rotativos', link: 'sellos-partidos' },
    { title: 'Sellos Activados por Resorte', link: 'sellos-partidos' }
  ];
}
