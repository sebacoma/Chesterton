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

  toggleSubMenu(menu: 'isInicioOpen' | 'isNosotrosOpen' | 'isProductosOpen' | 'isServiciosOpen' | 'isBlogOpen' | 'isContactoOpen') {
    console.log(`Toggling ${menu}`); // Depuración
    this[menu] = !this[menu];
    console.log(`${menu} is now ${this[menu]}`); // Depuración
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
