import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importo todos los servicios del index
import {
  SettingsService,
  SharedService,
  SidebarService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
