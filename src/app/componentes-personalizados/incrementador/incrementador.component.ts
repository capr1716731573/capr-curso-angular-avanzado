import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;
  @Input() porcentaje:number=50;
  @Input('nombre') leyenda:string='Leyenda';

  @Output('actualizarValor') cambioValor:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {
   
    if ( this.porcentaje >= 100) {
    this.porcentaje = 100;
    return;
    }
    if ( this.porcentaje <= 0) {
    this.porcentaje = 0;
    return;
    }

    this.porcentaje = this.porcentaje + valor;
    //aqui ejecuto el emitevent
    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();

    }

    onChanges(newValue:number){
     
     if(newValue >= 100){
       this.porcentaje=100;
     }else if(newValue <=0){
       this.porcentaje=0;
     }else{
       this.porcentaje=newValue;
     }

     this.txtProgress.nativeElement.value=this.porcentaje;

     //aqui ejecuto el emitevent
    this.cambioValor.emit(this.porcentaje);
    }

}
