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
import { HistoriaComponent } from './pages/historia/historia.component';
import { SelladoEquipoEstacionarioComponent } from './pages/soluciones/sellado-equipo-estacionario/sellado-equipo-estacionario.component';
import { SelladoEquipoRotatorioComponent } from './pages/soluciones/sellado-equipo-rotatorio/sellado-equipo-rotatorio.component';
import { SelladoValvulasComponent } from './pages/soluciones/sellado-valvulas/sellado-valvulas.component';
import { SelladoCilindrosHidraulicosComponent } from './pages/soluciones/sellado-cilindros-hidraulicos/sellado-cilindros-hidraulicos.component';
import { ProteccionRodamientoComponent } from './pages/soluciones/proteccion-rodamiento/proteccion-rodamiento.component';
import { ServiciosReparacionComponent } from './pages/soluciones/servicios-reparacion/servicios-reparacion.component';
import { ServiciosInstalacionDetencionDePlantaComponent } from './pages/soluciones/servicios-instalacion-detencion-de-planta/servicios-instalacion-detencion-de-planta.component';
import { ServiciosDeMonitoreoComponent } from './pages/soluciones/servicios-de-monitoreo/servicios-de-monitoreo.component';
import { DisenoFabricacionLocalComponent } from './pages/soluciones/diseno-fabricacion-local/diseno-fabricacion-local.component';

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
    FooterComponent,
    HistoriaComponent,
    SelladoEquipoEstacionarioComponent,
    SelladoEquipoRotatorioComponent,
    SelladoValvulasComponent,
    SelladoCilindrosHidraulicosComponent,
    ProteccionRodamientoComponent,
    ServiciosReparacionComponent,
    ServiciosInstalacionDetencionDePlantaComponent,
    ServiciosDeMonitoreoComponent,
    DisenoFabricacionLocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
