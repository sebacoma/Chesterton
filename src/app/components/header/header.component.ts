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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(menu: 'isInicioOpen' | 'isNosotrosOpen' | 'isProductosOpen' | 'isServiciosOpen' | 'isBlogOpen' | 'isContactoOpen') {
    this[menu] = !this[menu];
  }
}