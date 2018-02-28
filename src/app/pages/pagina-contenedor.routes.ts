import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { PaginaContenedorComponent } from './pagina-contenedor.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pages_routes: Routes = [
    {
        path: "",
        component: PaginaContenedorComponent,
        children: [
          { path: "dashboard", component: DashboardComponent },
          { path: "progress", component: ProgessComponent },
          { path: "graficas1", component: Graficas1Component },
          { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
      }
];

export const PAGINA_CONTENEDOR_ROUTES = RouterModule.forChild(pages_routes);
