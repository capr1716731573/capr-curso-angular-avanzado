import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//llamar funcion de jquery englobada dentro de una de javascript 
//el archivo que la conttiene se llama custom.js y se lo importo en el index.html
//asi que se la puede utilizar en todo el documento.
declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
    //esta funcion engloba e inicializa los plugin de jquery y el archivo que la contiene se importo en el index.html
    //lo que se hizo es a todo ese archivo meter dentro de una funcion javascript llamanda init_plugins()
    //y para llamarla se la hace de la siguiente manera
    init_plugins();
  }

  ingresar(){
    this.router.navigate(['dashboard']);
  }

}
