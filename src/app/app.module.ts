import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaUsuarioComponent } from './component/vista-usuario/vista-usuario.component';
import { VistaBusquedaComponent } from './component/vista-busqueda/vista-busqueda.component';
import { VistaCRUDComponent } from './component/vista-crud/vista-crud.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VistaUsuarioComponent,
    VistaBusquedaComponent,
    VistaCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
