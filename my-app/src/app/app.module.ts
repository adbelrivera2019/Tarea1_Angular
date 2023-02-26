import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AlbumComponent } from './album/album.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    EncabezadoComponent,
    AlbumComponent,
    PiepaginaComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
