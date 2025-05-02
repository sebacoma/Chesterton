import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isInicioOpen = false;
  isNosotrosOpen = false;
  isProductosOpen = false;
  isServiciosOpen = false;
  isBlogOpen = false;
  isContactoOpen = false;
  isHistoriaOpen = false;
  toggleSubMenu(menu: 'isNosotrosOpen' | 'isProductosOpen' | 'isServiciosOpen' | 'isBlogOpen' | 'isContactoOpen' | 'isHistoriaOpen') {
    this[menu] = !this[menu];
  }
  scrollToSection(section: string) {
    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
  }
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
