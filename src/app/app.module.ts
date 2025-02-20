import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { SellosPartidosComponent } from './pages/productos/sellos/sellos-partidos/sellos-partidos.component';
import { SellosCartuchoComponent } from './pages/productos/sellos/sellos-cartucho/sellos-cartucho.component';
import { SellosCaseteComponent } from './pages/productos/sellos/sellos-casete/sellos-casete.component';
import { SellosGasComponent } from './pages/productos/sellos/sellos-gas/sellos-gas.component';
import { SellosFuelleComponent } from './pages/productos/sellos/sellos-fuelle/sellos-fuelle.component';
import { SellosLodosComponent } from './pages/productos/sellos/sellos-lodos/sellos-lodos.component';
import { SellosMezclaAgitadoresComponent } from './pages/productos/sellos/sellos-mezcla-agitadores/sellos-mezcla-agitadores.component';
import { SellosComponentesComponent } from './pages/productos/sellos/sellos-componentes/sellos-componentes.component';
import { SellosEspecializadosComponent } from './pages/productos/sellos/sellos-especializados/sellos-especializados.component';
import { SellosSoporteSelladoComponent } from './pages/productos/sellos/sellos-soporte-sellado/sellos-soporte-sellado.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LimpiadoresComponent } from './pages/productos/hidraulicos/limpiadores/limpiadores.component';
import { SellosParaVastagosComponent } from './pages/productos/hidraulicos/sellos-para-vastagos/sellos-para-vastagos.component';
import { DispositivosAuxiliaresComponent } from './pages/productos/hidraulicos/dispositivos-auxiliares/dispositivos-auxiliares.component';
import { SelladoMultipropositoComponent } from './pages/productos/empaquetaduras/sellos-bomba/sellado-multiproposito.component';
import { SelladoBridasComponent } from './pages/productos/empaquetaduras/sellado-bridas/sellado-bridas.component';
import { SellosValvulasComponent } from './pages/productos/empaquetaduras/sellos-valvulas/sellos-valvulas.component';
import { SellosRotatoriosComponent } from './pages/productos/empaquetaduras/sellos-rotatorios/sellos-rotatorios.component';
import { MonitoreoDeEquiposComponent } from './pages/productos/monitoreo-de-equipos/monitoreo-de-equipos.component';
import { NubeChestertonConnectComponent } from './pages/productos/monitoreo/nube-chesterton-connect/nube-chesterton-connect.component';
import { SistemaChestertonConnectComponent } from './pages/productos/monitoreo/sistema-chesterton-connect/sistema-chesterton-connect.component';
import { SpiralTracMecanicoComponent } from './pages/productos/sellos/spiral-trac-mecanico/spiral-trac-mecanico.component';
import { SpiralTracEmpaquetaduraComponent } from './pages/productos/empaquetaduras/spiral-trac-empaquetadura/spiral-trac-empaquetadura.component';

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
    DisenoFabricacionLocalComponent,
    SellosPartidosComponent,
    SellosCartuchoComponent,
    SellosCaseteComponent,
    SellosGasComponent,
    SellosFuelleComponent,
    SellosLodosComponent,
    SellosMezclaAgitadoresComponent,
    SellosComponentesComponent,
    SellosEspecializadosComponent,
    SellosSoporteSelladoComponent,
    ContactoComponent,
    LimpiadoresComponent,
    SellosParaVastagosComponent,
    DispositivosAuxiliaresComponent,
    SellosRotatoriosComponent,
    SelladoMultipropositoComponent,
    SelladoBridasComponent,
    SellosValvulasComponent,
    SellosRotatoriosComponent,
    MonitoreoDeEquiposComponent,
    NubeChestertonConnectComponent,
    SistemaChestertonConnectComponent,
    SpiralTracMecanicoComponent,
    SpiralTracEmpaquetaduraComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
