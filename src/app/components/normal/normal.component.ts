import { Component, OnInit } from '@angular/core';
import * as jstat from 'jstat';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css'],
})
export class NormalComponent implements OnInit {
  count: number = 0;

  media: number = 15;
  desviacion: number = 2;
  iteraciones: number = 20;

  listaNumeros = [];

  constructor() {}

  ngOnInit(): void {}

  generar() {
    let x = 1;
    while (x < this.iteraciones) {
      let numero = jstat.normal.sample(this.media, this.desviacion);
      this.listaNumeros.push(numero);
      x++;
    }
  }
}
