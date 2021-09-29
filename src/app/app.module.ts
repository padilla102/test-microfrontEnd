import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloUnoModule } from './modulo-uno/modulo-uno.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloUnoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
