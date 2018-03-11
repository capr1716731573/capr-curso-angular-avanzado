import { NgModule } from "@angular/core";

//MODULOS
import { SharedModule } from "../shared/shared.module.module";
import { ChartsModule } from 'ng2-charts';
//RUTAS
import { PAGINA_CONTENEDOR_ROUTES } from "./pagina-contenedor.routes";

//COMPONENTE PRINCIPAL
import { PaginaContenedorComponent } from './pagina-contenedor.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgessComponent } from './progess/progess.component';
import { RouterModule } from '@angular/router';

//TEMPORAL
import { IncrementadorComponent } from "../componentes-personalizados/incrementador/incrementador.component";
import { GraficoDonaComponent } from '../componentes-personalizados/grafico-dona/grafico-dona.component';

//temporal
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RsjxComponent } from './rsjx/rsjx.component';


@NgModule({
    declarations:[
        PaginaContenedorComponent,
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,

        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RsjxComponent
    ],
    exports:[
        PaginaContenedorComponent,
        DashboardComponent,
        Graficas1Component,
        ProgessComponent
    ],
    imports:[
        SharedModule,
        ChartsModule,
        //importo las rutsa de ese modulo que seran rutas hijas del app.routes principal
        PAGINA_CONTENEDOR_ROUTES,
        FormsModule
    ]
})

export class PaginasContenedorModule{ }