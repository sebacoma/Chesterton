import { Component } from '@angular/core';

@Component({
  selector: 'app-sellos-mecanicos',
  templateUrl: './sellos-mecanicos.component.html',
  styleUrls: ['./sellos-mecanicos.component.css']
})
export class SellosMecanicosComponent {
  seals = [
    { title: 'Sellos Mecánicos Partidos', link: 'sellos-partidos' },
    { title: 'Sellos Mecánicos de Cartucho', link: 'sellos-cartucho' },
    { title: 'Sellos Mecánicos de Cassette', link: 'sellos-casete' },
    { title: 'Sellos Mecánicos de Gas', link: 'sellos-gas' },
    { title: 'Sellos Mecánicos de Fuelle', link: 'sellos-fuelles' },
    { title: 'Sellos Mecánicos para Lodo', link: 'sellos-lodos' },
    { title: 'Sellos Mecánicos para Mezcladores/Agitadores', link: 'sellos-mezcla-agitadores' },
    { title: 'Sellos Mecánicos de Componentes', link: 'sellos-componentes' },
    { title: 'Sellos Mecánicos Especializados', link: 'sellos-especializados' },
    { title: 'SpiralTrac para sellos Mecánicos', link: 'spiral-trac-mecanico' },
    { title: 'Sistema de Soporte de Sellado para Sellos Mecánicos (Plan Ambiental API)', link: 'sellos-soporte-sellado' }
  ];
}
