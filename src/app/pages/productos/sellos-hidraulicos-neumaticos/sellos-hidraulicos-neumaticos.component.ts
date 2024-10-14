import { Component } from '@angular/core';

@Component({
  selector: 'app-sellos-hidraulicos-neumaticos',
  templateUrl: './sellos-hidraulicos-neumaticos.component.html',
  styleUrls: ['./sellos-hidraulicos-neumaticos.component.css']
})
export class SellosHidraulicosNeumaticosComponent {
  seals = [
    { title: 'Sellado de Equipos Rotativos', link: 'sellos-rotatorios' },
    { title: 'Limpiadores', link: 'limpiadores' },
    { title: 'Sellos para Vástagos y Pistones', link: 'sellos-vastagos' },
    { title: 'Dispositivos Auxiliares', link: 'dispositivos-auxiliares' }
  ];
}
