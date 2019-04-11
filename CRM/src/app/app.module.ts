import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
//Servicios
//import { RegistroService } from './Servicios/registro.service'

import { AppComponent } from './app.component';
import { CreaPQRSComponent } from './components/Seguimiento/crea-pqrs/crea-pqrs.component';
import { ConsultaPQRSComponent } from './components/Seguimiento/consulta-pqrs/consulta-pqrs.component';
import { CrearSeguimientoComponent } from './components/Seguimiento/crear-seguimiento/crear-seguimiento.component';
import { ConsultaSeguimientoComponent } from './components/Seguimiento/consulta-seguimiento/consulta-seguimiento.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/GestionContactos/login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CreaPQRSComponent,
    ConsultaPQRSComponent,
    CrearSeguimientoComponent,
    ConsultaSeguimientoComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
