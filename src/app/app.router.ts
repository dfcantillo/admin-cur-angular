import { Routes, RouterModule } from '@angular/router';

// todas las paginas despues de loguearse o register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const appRoutes: Routes = [
    {path: 'login', component : LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: '**', component : NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );
