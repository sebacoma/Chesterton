import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CondicionesComponent } from './pages/condiciones/condiciones.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'condiciones', component: CondicionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
