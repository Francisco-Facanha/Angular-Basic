import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProjetoangularComponent } from './projetoangular/projetoangular.component';
import { TesteComponent } from './teste/teste.component'
import { ClientesModule } from './clientes/clientes.module'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProjetoangularComponent,
    TesteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
