import { Component } from '@angular/core';

@Component({
  selector: 'app-empaquetaduras-mecanicas-juntas',
  templateUrl: './empaquetaduras-mecanicas-juntas.component.html',
  styleUrls: ['./empaquetaduras-mecanicas-juntas.component.css']
})
export class EmpaquetadurasMecanicasJuntasComponent {
  seals = [
    { title: 'Sellado de equipos rotatorios', link: 'limpiadores' },
    { title: 'Sellado Multipropósito', link: 'sellos-vastagos' },
    { title: 'Sellado de Válvulas', link: 'dispositivos-auxiliares' },
    { title: 'Sellado de Bridas', link: 'dispositivos-auxiliares' },
    { title: 'Equipo Especial', link: 'dispositivos-auxiliares' },
  ];
}
