import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { PaginaContenedorComponent } from './pagina-contenedor.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RsjxComponent } from './rsjx/rsjx.component';
import { PromesasComponent } from './promesas/promesas.component';


const pages_routes: Routes = [
    {
        path: "",
        component: PaginaContenedorComponent,
        children: [
          { path: "dashboard", component: DashboardComponent, data:{ titulo: "DashBoard"} },
          { path: "progress", component: ProgessComponent, data:{ titulo: "Progress Bar Example"}  },
          { path: "graficas1", component: Graficas1Component, data:{ titulo: " Graficas Donas"}  },
          { path: "account-settings", component: AccountSettingsComponent, data:{ titulo: "Configuraciones"}  },
          { path: "promesas", component: PromesasComponent, data:{ titulo: "Promesas"}  },
          { path: "rsjx", component: RsjxComponent , data:{ titulo: "Observables RSJX"} },
          { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
      }
];

export const PAGINA_CONTENEDOR_ROUTES = RouterModule.forChild(pages_routes);
