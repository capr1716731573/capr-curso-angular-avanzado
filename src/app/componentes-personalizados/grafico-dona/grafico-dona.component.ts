import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('datos') datosGrafico:number[]=[];
  @Input('leyenda') leyenda:string="No tiene Leyenda";
  @Input('tipo') tipoChart:string='';
  @Input ('titulos') labels:string[];

  constructor() { }

  ngOnInit() {
  }

}
