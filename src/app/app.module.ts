import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';



import { AppComponent } from './app.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AppService } from './services/app-service';
import { ProyectoDetailComponent } from './components/proyecto-detail/proyecto-detail.component';

import { SwiperModule} from 'swiper/angular';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    ProyectosComponent,
    ConocimientosComponent,
    ExperienciaComponent,
    ContactoComponent,
    ProyectoDetailComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    AppService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
