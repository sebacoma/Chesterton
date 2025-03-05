import { Component } from '@angular/core';

@Component({
  selector: 'app-spiral-trac-empaquetadura',
  templateUrl: './spiral-trac-empaquetadura.component.html',
  styleUrls: ['./spiral-trac-empaquetadura.component.css']
})
export class SpiralTracEmpaquetaduraComponent {
  brochureUrl: string = 'assets/SpiralTrac para Empaquetadura Trenzada.pdf';

  downloadBrochure() {
    const link = document.createElement('a');
    link.href = this.brochureUrl;
    link.setAttribute('download', 'assets/SpiralTrac para Empaquetadura Trenzada.pdf');
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
