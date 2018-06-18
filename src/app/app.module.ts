import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.router';

// Modulos
import { AppComponent } from './app.component';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PageModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
