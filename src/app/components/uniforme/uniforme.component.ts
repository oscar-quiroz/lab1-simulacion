import { Component, OnInit } from '@angular/core';
import * as jstat from 'jstat'

@Component({
  selector: 'app-uniforme',
  templateUrl: './uniforme.component.html',
  styleUrls: ['./uniforme.component.css'],
})
export class UniformeComponent implements OnInit {
  count: number = 0;

  iteraciones: number = 10;
  min: number = 8;
  max: number = 10;
  cantidad;
  extension: number = 0;

  xi: number = 0;
  xi2: number = 0;
  extaccion: number = 0;
  ri: number = 0;
  ni: number = 0;

  listaNumeros = [];
  constructor() {}

  ngOnInit(): void {}

  generar(){
    this.listaNumeros=[]
    console.log("imprimir")
    let x=1;
    let aux,aux2 =0;
    while(x <= this.iteraciones){
      let number = jstat.uniform.sample(this.min, this.max)
      this.listaNumeros.push(number)
      x++;
    }
    console.log(this.listaNumeros)
  }

}
