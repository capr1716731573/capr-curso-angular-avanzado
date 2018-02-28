import { NgModule } from "@angular/core";

//MODULOS
import { SharedModule } from "../shared/shared.module.module";
import { PAGINA_CONTENEDOR_ROUTES } from "./pagina-contenedor.routes";

//COMPONENTE PRINCIPAL
import { PaginaContenedorComponent } from './pagina-contenedor.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgessComponent } from './progess/progess.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations:[
        PaginaContenedorComponent,
        DashboardComponent,
        Graficas1Component,
        ProgessComponent
    ],
    exports:[
        PaginaContenedorComponent,
        DashboardComponent,
        Graficas1Component,
        ProgessComponent
    ],
    imports:[
        SharedModule,
        //importo las rutsa de ese modulo que seran rutas hijas del app.routes principal
        PAGINA_CONTENEDOR_ROUTES
    ]
})

export class PaginasContenedorModule{ }