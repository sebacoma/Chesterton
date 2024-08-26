import { Component } from '@angular/core';

@Component({
  selector: 'app-sellos-hidraulicos-neumaticos',
  templateUrl: './sellos-hidraulicos-neumaticos.component.html',
  styleUrls: ['./sellos-hidraulicos-neumaticos.component.css']
})
export class SellosHidraulicosNeumaticosComponent {
  seals = [
    { title: 'Limpiadores', link: 'sellos-partidos' },
    { title: 'Sellos para Vástagos', link: 'sellos-partidos' },
    { title: 'Sellos para Pistones', link: 'sellos-partidos' },
    { title: 'Dispositivos Auxiliares', link: 'sellos-partidos' }
  ];
}
