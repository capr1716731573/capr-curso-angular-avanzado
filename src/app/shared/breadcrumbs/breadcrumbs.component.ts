import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo_pagina:string='';

//Router es un observable
  constructor( private router:Router,
                public meta:Meta,
                public title:Title ) { 
    this.getDataRuta()
    .subscribe( data => {
      this.titulo_pagina=data.titulo;
      this.title.setTitle(this.titulo_pagina);

      let metaTag:MetaDefinition={
        name:'description',
        content:this.titulo_pagina
      }

      //actualizo los metatags de la pagina actual
      this.meta.updateTag(metaTag);

      console.log(data);
    }); 

  }

  getDataRuta(){
   return this.router.events
    //filtra si el evento es de tipo ActivationEnd
    .filter( evento => evento instanceof ActivationEnd)
    //filtra que el evento en la propiedad firstChild sea igual a null
    .filter( (evento : ActivationEnd) => evento.snapshot.firstChild === null)
    .map( (evento : ActivationEnd) => evento.snapshot.data )
    
  }

  ngOnInit() {
  }

}
