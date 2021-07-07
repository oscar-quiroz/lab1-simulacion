import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
