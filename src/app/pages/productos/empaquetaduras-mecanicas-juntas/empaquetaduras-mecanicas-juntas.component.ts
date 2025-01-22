import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-empaquetaduras-mecanicas-juntas',
  templateUrl: './empaquetaduras-mecanicas-juntas.component.html',
  styleUrls: ['./empaquetaduras-mecanicas-juntas.component.css']
})
export class EmpaquetadurasMecanicasJuntasComponent {
  seals = [
    { title: 'Sellado de Equipos Rotatorios', link: 'sellos-multiproposito'},
    { title: 'Sellado de Válvulas', link: 'sellos-valvulas' },
    { title: 'Sellado de Bridas', link: 'sellos-bridas' },
  ];
}
