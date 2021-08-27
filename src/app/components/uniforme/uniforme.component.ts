import { Component, OnInit } from '@angular/core';
import * as jstat from 'jstat'
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-uniforme',
  templateUrl: './uniforme.component.html',
  styleUrls: ['./uniforme.component.css'],
})
export class UniformeComponent implements OnInit {
  count: number = 0;

  iteraciones: number = 2000;
  min: number = 4;
  max: number = 10;
  cantidad;
  extension: number = 0;

  xi: number = 0;
  xi2: number = 0;
  extaccion: number = 0;
  ri: number = 0;
  ni: number = 0;


  data: number[];
  labels: Label[] = [];
  redondeados = [];
  indices = [];

  isVoid=false;

  listaNumeros = [];
  constructor() {}

  ngOnInit(): void {}

  generar(){
    this.isVoid=false;
    this.data=[]
    this.labels=[]
    this.redondeados=[]
    this.indices=[]
    this.listaNumeros=[]
    console.log("imprimir")
    let x=1;

    while(x <= this.iteraciones){
      let number = jstat.uniform.sample(this.min, this.max)
      this.listaNumeros.push(number)
      x++;
    }
    console.log(this.listaNumeros)
    this.encontrarLabels();
    this.redordear(this.listaNumeros);
//console.log("longitud de :   ",this.calcularFrecuencias(this.redondeados).length)
    this.data = this.calcularFrecuencias(this.redondeados);

    setTimeout(() => {
      this.isVoid = true;
    }, 100);
  }


  encontrarLabels() {
    let inicio = this.min - 2;
    while (inicio < this.max + 2) {
      this.labels.push(inicio + '');
      this.indices.push(inicio);
      inicio = inicio + 1;
    }
  }

  redordear(lista) {
    lista.forEach((element) => {
      this.redondeados.push(Math.round(element));
    });
  }


  calcularFrecuencias(listaa){
    let lista = [...listaa];
    lista.forEach((element)=>{
        element = Math.floor(element);
    })
    var indices = this.indices; // colocar en vez de 8 el max del array "x"
    for (let i = this.min -22; i <= this.max+ 2; i++) {
        var count = 0;
        lista.forEach((v) => {if(v===i){count++}});
        indices[i-(this.min- 2)]= count;
        console.log(i)
    }
    
    console.log('indices', indices);
    return indices;
  }

}
