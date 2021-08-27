import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetodosComponent } from './pages/metodos/metodos.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { CuadradosComponent } from './components/cuadrados/cuadrados.component';
import { CuadradosMediosComponent } from './components/cuadrados-medios/cuadrados-medios.component';
import { FormsModule } from '@angular/forms';
import { MultiplicativasComponent } from './components/multiplicativas/multiplicativas.component';
import { LinealComponent } from './components/lineal/lineal.component';
import { UniformeComponent } from './components/uniforme/uniforme.component';
import { NormalComponent } from './components/normal/normal.component';
import { PruebaMediasComponent } from './components/prueba-medias/prueba-medias.component';
import { PruebaVarianzaComponent } from './components/prueba-varianza/prueba-varianza.component';
import { Pruebachi2Component } from './components/pruebachi2/pruebachi2.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { PruebaKsComponent } from './components/prueba-ks/prueba-ks.component';
import { Poker5Component } from './components/poker5/poker5.component';
import { BarGraphicsComponent } from './components/bar-graphics/bar-graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    MetodosComponent,
    PruebasComponent,
    CuadradosComponent,
    CuadradosMediosComponent,
    MultiplicativasComponent,
    LinealComponent,
    UniformeComponent,
    NormalComponent,
    PruebaMediasComponent,
    PruebaVarianzaComponent,
    Pruebachi2Component,
    InicioComponent,
    HomeComponent,
    PruebaKsComponent,
    Poker5Component,
    BarGraphicsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
