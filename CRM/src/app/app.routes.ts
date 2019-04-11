import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/GestionContactos/login/login.component';
import { ConsultaPQRSComponent } from './components/Seguimiento/consulta-pqrs/consulta-pqrs.component';
import { ConsultaSeguimientoComponent } from './components/Seguimiento/consulta-seguimiento/consulta-seguimiento.component';
import { CreaPQRSComponent } from './components/Seguimiento/crea-pqrs/crea-pqrs.component';
import { CrearSeguimientoComponent } from './components/Seguimiento/crear-seguimiento/crear-seguimiento.component';


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'consulta-pqrs', component: ConsultaPQRSComponent },
    { path: 'crea-pqrs', component: CreaPQRSComponent },
    { path: 'consultar-seguimiento', component: ConsultaSeguimientoComponent },
    { path: 'crear-seguimiento', component: CrearSeguimientoComponent },
    { path: '**', pathMatch: 'full', redirectTo:'registro'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);