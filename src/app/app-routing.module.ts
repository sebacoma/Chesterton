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

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'condiciones', component: CondicionesComponent},
  {path:'historia', component: HistoriaComponent},
  {path:'productos/sellos-mecanicos', component: SellosMecanicosComponent},
  {path:'productos/sellos-hidraulicos-neumaticos', component: SellosHidraulicosNeumaticosComponent},
  {path:'productos/empaquetaduras-mecanicas-juntas', component: EmpaquetadurasMecanicasJuntasComponent},
  {path:'productos/juntas-expansion',component:JuntasExpansionComponent},
  {path:'productos/proteccion-rodamientos',component:ProteccionRodamientosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
