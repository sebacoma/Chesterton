import { Component } from '@angular/core';

@Component({
  selector: 'app-monitoreo-de-equipos',
  templateUrl: './monitoreo-de-equipos.component.html',
  styleUrls: ['./monitoreo-de-equipos.component.css']
})
export class MonitoreoDeEquiposComponent {
  seals = [
    { title: 'Sistema Chesterton Connect™', link: 'sistema-chesterton-connect' },
    { title: 'Chesterton Connect™ - Configuración de Bomba', link: 'chesterton-connect-pump-configuration' },
    { title: 'Chesterton Connect™ - Sensores', link: 'chesterton-connect-sensors' },
    { title: 'Chesterton Connect™ - Accesibilidad Remota', link: 'chesterton-connect-remote-accessibility' },
    { title: 'Chesterton Connect™ - Casos de Estudio', link: 'chesterton-connect-case-studies' }
  ]; 
}
