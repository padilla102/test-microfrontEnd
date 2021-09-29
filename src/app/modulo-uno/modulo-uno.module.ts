import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloUnoRoutingModule } from './modulo-uno-routing.module';
import { UnoComponent } from './component/uno/uno.component';


@NgModule({
  declarations: [
    UnoComponent
  ],
  imports: [
    CommonModule,
    ModuloUnoRoutingModule
  ]
})
export class ModuloUnoModule { }
