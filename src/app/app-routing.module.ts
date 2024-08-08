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

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'condiciones', component: CondicionesComponent},
  {path:'historia', component: HistoriaComponent},
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
  {path:'soluciones/sellado-valvulas',component:SelladoValvulasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
