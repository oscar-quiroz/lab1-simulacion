import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetodosComponent } from './pages/metodos/metodos.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { CuadradosMediosComponent } from './components/cuadrados-medios/cuadrados-medios.component';
import { CuadradosComponent } from './components/cuadrados/cuadrados.component';

const routes: Routes = [
  {
    path:"metodos",
    component: MetodosComponent,
    children: [
      {   path:"cuadrados-medios",
          component: CuadradosMediosComponent
      },
      {   path:"cuadrados",
          component: CuadradosComponent
      },
    ]
  }, 
  {
    path:"pruebas",
    component: PruebasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
