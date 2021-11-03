import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AgregarBomberoComponent } from './componentes/agregar-bombero/agregar-bombero.component';
import { EditarBomberoComponent } from './componentes/editar-bombero/editar-bombero.component';
import { ListarBomberoComponent } from './componentes/listar-bombero/listar-bombero.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarBomberoComponent,
    EditarBomberoComponent,
    ListarBomberoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
