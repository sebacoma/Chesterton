import { Component } from '@angular/core';

@Component({
  selector: 'app-limpiadores',
  templateUrl: './limpiadores.component.html',
  styleUrls: ['./limpiadores.component.css']
})
export class LimpiadoresComponent {
  downloadPDF() {
    const link = document.createElement('a');
    link.href = '../../pdfs/Limpiadores_5K_21K.pdf';  // Ruta al archivo PDF en la carpeta de assets
    link.download = 'Limpiadores_5K_21K.pdf';  // Nombre del archivo cuando se descargue
    link.click();  // Simular clic en el enlace para descargar
  }
}
