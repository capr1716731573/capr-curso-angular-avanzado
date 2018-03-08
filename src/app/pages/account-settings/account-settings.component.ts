import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  //aqui inyecto una dependencia para manejar el DOM
  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes:SettingsService) { }


  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string, elementoHtml: any){
   
    this.aplicarCheck(elementoHtml);
    this._ajustes.aplicarTema(tema);
   
  }

  aplicarCheck(elementoHtml: any){
    //capturo un arreglo con todos los elementos de la clase selector
    let selectores:any=document.getElementsByClassName('selector');
    //remuevo su clase working
    for(let ref of selectores){
      ref.classList.remove('working');
    }

    //agrego la clase del check al elemento seleccionado
    elementoHtml.classList.add('working');

  }
  colocarCheck(){
     //capturo un arreglo con todos los elementos de la clase selector
     let selectores:any=document.getElementsByClassName('selector');

     let tema=this._ajustes.ajustes.tema;
     for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }

  }

}
