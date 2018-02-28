import { RouterModule, Routes } from "@angular/router";

//pagina contenedora principal
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";

const appRoutes: Routes = [
 
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NopagefoundComponent }
];

export const APP_ROUTES_PRINCIPALES = RouterModule.forRoot(appRoutes, {
  useHash: true
});
