import { Component } from '@angular/core';

@Component({
  selector: 'app-sellos-mecanicos',
  templateUrl: './sellos-mecanicos.component.html',
  styleUrls: ['./sellos-mecanicos.component.css']
})
export class SellosMecanicosComponent {
  seals = [
    { title: 'Sellos Partidos', link: 'sellos-partidos' },
    { title: 'Sellos de Cartucho', link: 'sellos-cartucho' },
    { title: 'Sellos de Cassette', link: 'sellos-casete' },
    { title: 'Sellos de Gas', link: 'sellos-gas' },
    { title: 'Sellos de Fuelle', link: 'sellos-fuelles' },
    { title: 'Sellos para Lodo', link: 'sellos-lodos' },
    { title: 'Sellos para Mezcladores/Agitadores', link: 'sellos-mezcla-agitadores' },
    { title: 'Sellos de Componentes', link: 'sellos-componentes' },
    { title: 'Sellos Especializados', link: 'sellos-especializados' },
    { title: 'Sistemas de Soporte de Sellado', link: 'sellos-soporte-sellado' }
  ];
}
