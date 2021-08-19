import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ListatareasComponent } from './components/listatareas/listatareas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FiltrosComponent,
    ListatareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
