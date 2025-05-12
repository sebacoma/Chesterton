import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CondicionesComponent } from './pages/condiciones/condiciones.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { SellosMecanicosComponent } from './pages/productos/sellos-mecanicos/sellos-mecanicos.component';
import { SellosHidraulicosNeumaticosComponent } from './pages/productos/sellos-hidraulicos-neumaticos/sellos-hidraulicos-neumaticos.component';
import { EmpaquetadurasMecanicasJuntasComponent } from './pages/productos/empaquetaduras-mecanicas-juntas/empaquetaduras-mecanicas-juntas.component';
import { JuntasExpansionComponent } from './pages/productos/juntas-expansion/juntas-expansion.component';
import { ProteccionRodamientosComponent } from './pages/productos/proteccion-rodamientos/proteccion-rodamientos.component';
import { DisenoFabricacionLocalComponent } from './pages/soluciones/diseno-fabricacion-local/diseno-fabricacion-local.component';
import { SelladoValvulasComponent } from './pages/soluciones/sellado-valvulas/sellado-valvulas.component';
import { SelladoEquipoEstacionarioComponent } from './pages/soluciones/sellado-equipo-estacionario/sellado-equipo-estacionario.component';
import { SelladoEquipoRotatorioComponent } from './pages/soluciones/sellado-equipo-rotatorio/sellado-equipo-rotatorio.component';
import { SelladoCilindrosHidraulicosComponent } from './pages/soluciones/sellado-cilindros-hidraulicos/sellado-cilindros-hidraulicos.component';
import { ServiciosReparacionComponent } from './pages/soluciones/servicios-reparacion/servicios-reparacion.component';
import { ServiciosDeMonitoreoComponent } from './pages/soluciones/servicios-de-monitoreo/servicios-de-monitoreo.component';
import { ServiciosInstalacionDetencionDePlantaComponent } from './pages/soluciones/servicios-instalacion-detencion-de-planta/servicios-instalacion-detencion-de-planta.component';
import { SellosPartidosComponent } from './pages/productos/sellos/sellos-partidos/sellos-partidos.component';
import { SellosCartuchoComponent } from './pages/productos/sellos/sellos-cartucho/sellos-cartucho.component';
import { SellosCaseteComponent } from './pages/productos/sellos/sellos-casete/sellos-casete.component';
import { SellosGasComponent } from './pages/productos/sellos/sellos-gas/sellos-gas.component';
import { SellosLodosComponent } from './pages/productos/sellos/sellos-lodos/sellos-lodos.component';
import { SellosMezclaAgitadoresComponent } from './pages/productos/sellos/sellos-mezcla-agitadores/sellos-mezcla-agitadores.component';
import { SellosComponentesComponent } from './pages/productos/sellos/sellos-componentes/sellos-componentes.component';
import { SellosEspecializadosComponent } from './pages/productos/sellos/sellos-especializados/sellos-especializados.component';
import { SellosSoporteSelladoComponent } from './pages/productos/sellos/sellos-soporte-sellado/sellos-soporte-sellado.component';
import { SellosFuelleComponent } from './pages/productos/sellos/sellos-fuelle/sellos-fuelle.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LimpiadoresComponent } from './pages/productos/hidraulicos/limpiadores/limpiadores.component';
import { SellosParaVastagosComponent } from './pages/productos/hidraulicos/sellos-para-vastagos/sellos-para-vastagos.component';
import { DispositivosAuxiliaresComponent } from './pages/productos/hidraulicos/dispositivos-auxiliares/dispositivos-auxiliares.component';
import { SellosValvulasComponent } from './pages/productos/empaquetaduras/sellos-valvulas/sellos-valvulas.component';
import { SellosRotatoriosComponent } from './pages/productos/empaquetaduras/sellos-rotatorios/sellos-rotatorios.component';
import { SelladoMultipropositoComponent } from './pages/productos/empaquetaduras/sellos-bomba/sellado-multiproposito.component';
import { SelladoBridasComponent } from './pages/productos/empaquetaduras/sellado-bridas/sellado-bridas.component';
import { MonitoreoDeEquiposComponent } from './pages/productos/monitoreo-de-equipos/monitoreo-de-equipos.component';
import { SistemaChestertonConnectComponent } from './pages/productos/monitoreo/sistema-chesterton-connect/sistema-chesterton-connect.component';
import { NubeChestertonConnectComponent } from './pages/productos/monitoreo/nube-chesterton-connect/nube-chesterton-connect.component';
import { SpiralTracMecanicoComponent } from './pages/productos/sellos/spiral-trac-mecanico/spiral-trac-mecanico.component';
import { SpiralTracEmpaquetaduraComponent } from './pages/productos/empaquetaduras/spiral-trac-empaquetadura/spiral-trac-empaquetadura.component';
import { ChestertonIIOTComponent } from './pages/productos/monitoreo/chesterton-iiot/chesterton-iiot.component';
import { ChestertonConnectPumpConfigurationComponent } from './pages/productos/monitoreo/chesterton-connect-pump-configuration/chesterton-connect-pump-configuration.component';
import { ChestertonConnectSensorsComponent } from './pages/productos/monitoreo/chesterton-connect-sensors/chesterton-connect-sensors.component';
import { ChestertonConnectRemoteAccessibilityComponent } from './pages/productos/monitoreo/chesterton-connect-remote-accessibility/chesterton-connect-remote-accessibility.component';
import { ChestertonConnectCaseStudiesComponent } from './pages/productos/monitoreo/chesterton-connect-case-studies/chesterton-connect-case-studies.component';
import { ChestertonConnectWhatIsComponent } from './pages/productos/monitoreo/chesterton-connect-what-is/chesterton-connect-what-is.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'condiciones', component: CondicionesComponent},
  {path:'historia', component: HistoriaComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'productos/sellos-mecanicos', component: SellosMecanicosComponent},
  {path:'productos/sellos-hidraulicos-neumaticos', component: SellosHidraulicosNeumaticosComponent},
  {path:'productos/empaquetaduras-mecanicas-juntas', component: EmpaquetadurasMecanicasJuntasComponent},
  {path:'productos/juntas-expansion',component:JuntasExpansionComponent},
  {path:'productos/proteccion-rodamientos',component:ProteccionRodamientosComponent},
  {path:'soluciones/diseno-fabricacion-local',component:DisenoFabricacionLocalComponent},
  {path:'soluciones/proteccion-rodamientos',component:ProteccionRodamientosComponent},
  {path:'soluciones/servicios-instalacion-detenciones-planta',component:ServiciosInstalacionDetencionDePlantaComponent},
  {path:'soluciones/servicios-monitoreo',component:ServiciosDeMonitoreoComponent},
  {path:'soluciones/servicios-reparacion',component:ServiciosReparacionComponent},
  {path:'soluciones/sellado-cilindros-hidraulicos',component:SelladoCilindrosHidraulicosComponent},
  {path:'soluciones/sellado-equipo-estacionario',component:SelladoEquipoEstacionarioComponent},
  {path:'soluciones/sellado-equipo-rotatorio',component:SelladoEquipoRotatorioComponent},
  {path:'soluciones/sellado-valvulas',component:SelladoValvulasComponent},
  {path:'productos/sellos-mecanicos/sellos-partidos',component:SellosPartidosComponent},
  {path:'productos/sellos-mecanicos/sellos-cartucho',component:SellosCartuchoComponent},
  {path:'productos/sellos-mecanicos/sellos-casete',component:SellosCaseteComponent},
  {path:'productos/sellos-mecanicos/sellos-gas',component:SellosGasComponent},
  {path:'productos/sellos-mecanicos/sellos-fuelles',component:SellosFuelleComponent},
  {path:'productos/sellos-mecanicos/sellos-lodos',component:SellosLodosComponent},
  {path:'productos/sellos-mecanicos/sellos-mezcla-agitadores',component:SellosMezclaAgitadoresComponent},
  {path:'productos/sellos-mecanicos/sellos-componentes',component:SellosComponentesComponent},
  {path:'productos/sellos-mecanicos/sellos-especializados',component:SellosEspecializadosComponent},
  {path:'productos/sellos-mecanicos/sellos-soporte-sellado',component:SellosSoporteSelladoComponent},
  {path:'productos/sellos-hidraulicos-neumaticos/limpiadores',component:LimpiadoresComponent},
  {path:'productos/sellos-hidraulicos-neumaticos/sellos-vastagos',component:SellosParaVastagosComponent},
  {path:'productos/sellos-hidraulicos-neumaticos/dispositivos-auxiliares',component:DispositivosAuxiliaresComponent},
  {path:'productos/empaquetaduras-mecanicas-juntas/sellos-valvulas',component:SellosValvulasComponent},
  {path:'productos/sellos-hidraulicos-neumaticos/sellos-rotatorios',component:SellosRotatoriosComponent},
  {path:'productos/empaquetaduras-mecanicas-juntas/sellos-multiproposito',component:SelladoMultipropositoComponent},
  {path:'productos/empaquetaduras-mecanicas-juntas/sellos-bridas',component:SelladoBridasComponent},
  {path:'productos/monitoreo-de-equipos',component:MonitoreoDeEquiposComponent},
  {path:'productos/monitoreo-de-equipos/sistema-chesterton-connect',component:SistemaChestertonConnectComponent},
  {path:'productos/monitoreo-de-equipos/nube-chesterton-connect',component:NubeChestertonConnectComponent},
  {path:'productos/sellos-mecanicos/spiral-trac-mecanico', component: SpiralTracMecanicoComponent},
  {path:'productos/empaquetaduras-mecanicas-juntas/spiral-trac-empaquetadura', component: SpiralTracEmpaquetaduraComponent},
  {path:'productos/monitoreo-de-equipos/chesterton-iiot', component: ChestertonIIOTComponent},
  {path:'productos/monitoreo-de-equipos/chesterton-connect-pump-configuration', component: ChestertonConnectPumpConfigurationComponent},
  {path:'productos/monitoreo-de-equipos/chesterton-connect-sensors', component: ChestertonConnectSensorsComponent},
  {path:'productos/monitoreo-de-equipos/chesterton-connect-remote-accessibility', component: ChestertonConnectRemoteAccessibilityComponent},
  {path:'productos/monitoreo-de-equipos/chesterton-connect-case-studies', component: ChestertonConnectCaseStudiesComponent},
  {path:'productos/monitoreo-de-equipos/chesterton-connect-what-is', component: ChestertonConnectWhatIsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { } 