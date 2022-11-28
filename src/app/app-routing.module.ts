import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectoDetailComponent } from './components/proyecto-detail/proyecto-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/presentacion', pathMatch: 'full' },
  { path: 'home', redirectTo: '/presentacion', pathMatch: 'full' },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/:proyecto', component: ProyectoDetailComponent },
  { path: 'conocimientos', component: ConocimientosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }