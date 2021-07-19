import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetodosComponent } from './pages/metodos/metodos.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { CuadradosMediosComponent } from './components/cuadrados-medios/cuadrados-medios.component';
import { CuadradosComponent } from './components/cuadrados/cuadrados.component';
import { MultiplicativasComponent } from './components/multiplicativas/multiplicativas.component';
import { LinealComponent } from './components/lineal/lineal.component';
import { UniformeComponent } from './components/uniforme/uniforme.component';
import { NormalComponent } from './components/normal/normal.component';
import { PruebaMediasComponent } from './components/prueba-medias/prueba-medias.component'
import { PruebaVarianzaComponent } from './components/prueba-varianza/prueba-varianza.component'

const routes: Routes = [
  {
    path: 'metodos',
    component: MetodosComponent,
    children: [
      { path: 'cuadrados-medios', component: CuadradosMediosComponent },
      { path: 'multiplicativa', component: MultiplicativasComponent },
      { path: 'lineal', component: LinealComponent },
      { path: 'uniforme', component: UniformeComponent },
      { path: 'normal', component: NormalComponent },
    ],
  },
  {
    path: 'pruebas',
    component: PruebasComponent,
    children:[
      {path:'prueba-medias',component:PruebaMediasComponent},
      {path:'prueba-varianza',component:PruebaVarianzaComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
