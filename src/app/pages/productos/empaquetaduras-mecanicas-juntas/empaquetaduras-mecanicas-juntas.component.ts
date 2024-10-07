import { Component } from '@angular/core';

@Component({
  selector: 'app-empaquetaduras-mecanicas-juntas',
  templateUrl: './empaquetaduras-mecanicas-juntas.component.html',
  styleUrls: ['./empaquetaduras-mecanicas-juntas.component.css']
})
export class EmpaquetadurasMecanicasJuntasComponent {
  seals = [
    { title: 'Sellado de Equipos Rotativos', link: 'sellos-rotatorios' },
    { title: 'Sellado Multipropósito', link: 'sellos-multiproposito' },
    { title: 'Sellado de Válvulas', link: 'sellos-valvulas' },
    { title: 'Sellado de Bridas', link: 'sellos-bridas' },
    { title: 'Equipo Especial', link: 'equipo-especial' },
  ];
}
