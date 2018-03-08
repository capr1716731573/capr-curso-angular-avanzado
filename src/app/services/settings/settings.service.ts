import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  //valores globales
  ajustes:Ajustes={
    temaUrl:'assets/css/colors/default.css',
    tema:'default'
  }


  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  //funciones para grabar y tener informacion del tema seleccionado en el localstorage
  guardarAjustes(){
    
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes=JSON.parse(localStorage.getItem('ajustes'));
     
      this.aplicarTema(this.ajustes.tema);
    }else{
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema:string){
    let url=`assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema=tema;
    this.ajustes.temaUrl=url;

    //grabo en el localstorage
    this.guardarAjustes();
  }

}

//Interface para validar que se asginan correctamente los valores de ajustes
interface Ajustes{
  temaUrl: string;
  tema:string;
}
