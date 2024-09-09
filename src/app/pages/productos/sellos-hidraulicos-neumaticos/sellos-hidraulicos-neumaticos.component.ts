import { Component } from '@angular/core';

@Component({
  selector: 'app-sellos-hidraulicos-neumaticos',
  templateUrl: './sellos-hidraulicos-neumaticos.component.html',
  styleUrls: ['./sellos-hidraulicos-neumaticos.component.css']
})
export class SellosHidraulicosNeumaticosComponent {
  seals = [
    { title: 'Limpiadores', link: 'limpiadores' },
    { title: 'Sellos para Vástagos', link: 'sellos-vastagos' },
    { title: 'Sellos para Pistones', link: 'sellos-pistones' },
    { title: 'Dispositivos Auxiliares', link: 'dispositivos-auxiliares' }
  ];
}
