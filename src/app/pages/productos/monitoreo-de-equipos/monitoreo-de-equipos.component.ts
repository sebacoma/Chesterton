import { Component } from '@angular/core';

@Component({
  selector: 'app-monitoreo-de-equipos',
  templateUrl: './monitoreo-de-equipos.component.html',
  styleUrls: ['./monitoreo-de-equipos.component.css']
})
export class MonitoreoDeEquiposComponent {
  seals = [
    { title: 'Nube Chesterton Connect™', link: 'nube-chesterton-connect' },
    { title: 'Sistema Chesterton Connect™', link: 'sistema-chesterton-connect' },
  ]; 
}
