import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SellosMecanicosComponent } from './productos/sellos-mecanicos/sellos-mecanicos.component';
import { SellosHidraulicosNeumaticosComponent } from './productos/sellos-hidraulicos-neumaticos/sellos-hidraulicos-neumaticos.component';
import { EmpaquetadurasMecanicasJuntasComponent } from './productos/empaquetaduras-mecanicas-juntas/empaquetaduras-mecanicas-juntas.component';
import { JuntasExpansionComponent } from './productos/juntas-expansion/juntas-expansion.component';
import { ProteccionRodamientosComponent } from './productos/proteccion-rodamientos/proteccion-rodamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SellosMecanicosComponent,
    SellosHidraulicosNeumaticosComponent,
    EmpaquetadurasMecanicasJuntasComponent,
    JuntasExpansionComponent,
    ProteccionRodamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
