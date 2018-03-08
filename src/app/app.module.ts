import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//RUTAS
import { APP_ROUTES_PRINCIPALES } from './app.routes';

//MODULOS
import { PaginasContenedorModule } from './pages/pagina-contenedor.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PaginasContenedorModule,
    ServiceModule,
    APP_ROUTES_PRINCIPALES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
