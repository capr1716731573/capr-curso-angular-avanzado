import { RouterModule, Routes } from "@angular/router";

//pagina contenedora principal
import { PaginaContenedorComponent } from "./pages/pagina-contenedor.component";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProgessComponent } from "./pages/progess/progess.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { RegisterComponent } from "./login/register.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PaginaContenedorComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgessComponent },
      { path: "graficas1", component: Graficas1Component },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  //{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: NopagefoundComponent }
];

export const APP_ROUTES_PRINCIPALES = RouterModule.forRoot(appRoutes, {
  useHash: true
});
