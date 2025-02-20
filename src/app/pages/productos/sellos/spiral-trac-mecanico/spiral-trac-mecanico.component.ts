import { Component } from '@angular/core';

@Component({
  selector: 'app-spiral-trac-mecanico',
  templateUrl: './spiral-trac-mecanico.component.html',
  styleUrls: ['./spiral-trac-mecanico.component.css']
})
export class SpiralTracMecanicoComponent {
  brochureUrl: string = 'assets/ST_seal_brochure_2023_EN.pdf';

  downloadBrochure() {
    const link = document.createElement('a');
    link.href = this.brochureUrl;
    link.setAttribute('download', 'ST_seal_brochure_2023_EN.pdf');
    link.setAttribute('target', '_blank'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  scrollToSection(id: string) {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
