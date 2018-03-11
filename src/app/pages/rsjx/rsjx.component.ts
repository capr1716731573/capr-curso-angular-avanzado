import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-rsjx',
  templateUrl: './rsjx.component.html',
  styles: []
})
export class RsjxComponent implements OnInit, OnDestroy {

  //vamos a manejar la subscripcion del observable
  //como un objeto indeppendiente
  subscription:Subscription;
  
  constructor() {
    //aqui me suscribo al observable y ejecuto 
    this.subscription= this.regresaObservable()
     
      .subscribe(
        //se ejecuta cuando pongo observer.next(contador);
        numero => console.log('Subs',numero),
        //se ejecuta cuando pongo observer.error('Auxilio!!');
        error => console.error(' Error en el obs (dos veces)',error),
        //se ejecuta cuando pongo  observer.complete();
        () => console.log('El observador termino')
    )
   }

  ngOnInit() {
  }

  //metodo que se ejcuta cuando cambio de pagina
   ngOnDestroy() {
   //aqui cuando cambio de pagina me desubcribo del observable
   this.subscription.unsubscribe(); 
  }

  //funcion que regresa un observable
  regresaObservable(): Observable<any>{
    return new Observable( observer => {
      let contador=0;
      let intervalo= setInterval( () => {
        contador+=1;

        let salida={
          valor:contador
        }

        //aqui es donde escucha el observable y ejecuta las accion retry, error segun valor que notifica
        observer.next(salida);

        if(contador === 25){
          //finalizo el intervalo de tiempo
          clearInterval(intervalo);
          //le digo que este observable ya esta completo y que se detenga caso contrario es infinito
          observer.complete();
        }

        /* if( contador === 2 ){
          //valido que cuando sea ==2 me ejecute un error
          //esa funcion de error se define arriba con el subscribe
          console.log('ejecuta Retry');
          observer.error('Auxilio!!');
        } */

      }, 1000);
    } )
     //aqui cuando encuentra el error se ejecuta y no deja que el error avance
      //aqui hace dos intentos
    .retry(2)
    //con map modifico el valor de la salida de la respuesta antes de presentarla
    .map( (resp:any) => {
      return resp.valor;
    })
    //siempre retorna un true o false
    //si retorna tru se visuliza o se ejecuta en el subscribe si es false no
    //valor es el valor que retorno anteriormente el map
    //index es el numero de veces que se ejecuta el observable.next
    .filter( (valor,index) => {
      if((valor % 2)===1){
        //es impar
        return true;
      }else{
        // es par
        return false;
      }
    })
  }

}
