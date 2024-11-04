import { Component } from '@angular/core';

@Component({
  selector: 'app-empaquetaduras-mecanicas-juntas',
  templateUrl: './empaquetaduras-mecanicas-juntas.component.html',
  styleUrls: ['./empaquetaduras-mecanicas-juntas.component.css']
})
export class EmpaquetadurasMecanicasJuntasComponent {
  seals = [
    { title: 'Sellado de Válvulas', link: 'sellos-valvulas' },
    { title: 'Sellado de Bridas', link: 'sellos-bridas' },
  ];
}
