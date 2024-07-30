import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SellosMecanicosComponent } from './pages/productos/sellos-mecanicos/sellos-mecanicos.component';
import { SellosHidraulicosNeumaticosComponent } from './pages/productos/sellos-hidraulicos-neumaticos/sellos-hidraulicos-neumaticos.component';
import { EmpaquetadurasMecanicasJuntasComponent } from './pages/productos/empaquetaduras-mecanicas-juntas/empaquetaduras-mecanicas-juntas.component';
import { JuntasExpansionComponent } from './pages/productos/juntas-expansion/juntas-expansion.component';
import { ProteccionRodamientosComponent } from './pages/productos/proteccion-rodamientos/proteccion-rodamientos.component';
import { CondicionesComponent } from './pages/condiciones/condiciones.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SellosMecanicosComponent,
    SellosHidraulicosNeumaticosComponent,
    EmpaquetadurasMecanicasJuntasComponent,
    JuntasExpansionComponent,
    ProteccionRodamientosComponent,
    CondicionesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
