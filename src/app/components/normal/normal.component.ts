import { Component, OnInit } from '@angular/core';
import * as jstat from 'jstat';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css'],
})
export class NormalComponent implements OnInit {
  count: number = 0;

  media: number = 15;
  desviacion: number = 2;
  iteraciones: number = 2000;
  data: number[];
  labels: Label[] = [];
  redondeados = [];
  indices = [];

  isVoid = false;

  listaNumeros: number[] = [];

  constructor() {}

  ngOnInit(): void {
    
  }

  generar() {
    this.isVoid=false;
    this.data=[]
    this.labels=[]
    this.redondeados=[]
    this.indices=[]
    this.listaNumeros=[]
    let x = 1;
    while (x < this.iteraciones) {
      let numero: number = jstat.normal.sample(this.media, this.desviacion);
      this.listaNumeros.push(numero);
      x++;
    }
   

    this.encontrarLabels();
    this.redordear(this.listaNumeros);
//console.log("longitud de :   ",this.calcularFrecuencias(this.redondeados).length)
    this.data = this.calcularFrecuencias(this.redondeados);

    setTimeout(() => {
      this.isVoid = true;
    }, 100);
  }

  encontrarLabels() {
    let inicio = this.media - this.desviacion - 3;
    while (inicio < this.media + this.desviacion + 3) {
      this.labels.push(inicio + '');
      this.indices.push(inicio);
      inicio = inicio + 1;
    }
  }

  calcularFrecuencias(listaa){
    let lista = [...listaa];
    lista.forEach((element)=>{
        element = Math.floor(element);
    })
    var indices = this.indices; // colocar en vez de 8 el max del array "x"
    for (let i = this.media - this.desviacion - 3; i <= this.media + this.desviacion + 2; i++) {
        var count = 0;
        lista.forEach((v) => {if(v===i){count++}});
        indices[i-(this.media - this.desviacion - 3)]= count;
        console.log(i)
    }
    
    console.log('indices', indices);
    return indices;
  }

  redordear(lista) {
    lista.forEach((element) => {
      this.redondeados.push(Math.round(element));
    });
  }
}
