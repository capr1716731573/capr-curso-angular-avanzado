import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  //arreglo de menu
  menu:any=[
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
    
    submenu:[
      {
        titulo:'Dashboard',url:'/dashboard'
      },
      {
        titulo:'ProgressBar',url:'/progress'
      },
      {
        titulo:'Gráficas',url:'/graficas1'
      }
    ]

  }

  ];

  constructor() { }

}
