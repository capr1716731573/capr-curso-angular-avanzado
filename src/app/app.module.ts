import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES_PRINCIPALES } from './app.routes';

//MODULOS
import { PaginasContenedorModule } from './pages/pagina-contenedor.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    PaginasContenedorModule,
    APP_ROUTES_PRINCIPALES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
