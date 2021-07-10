import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicativas',
  templateUrl: './multiplicativas.component.html',
  styleUrls: ['./multiplicativas.component.css'],
})
export class MultiplicativasComponent implements OnInit {
  count: number = 0;

  semilla: number = 0;

  x0: number = 0;
  t: number = 0;
  g: number = 0;
  a: number = 0;
  m: number = 0;

  min: number = 0;
  max: number = 0;
  cantidad;

  xi: number = 0;
  ri: number = 0;
  ni: number = 0;

  listaNumeros = [];

  constructor() {}

  ngOnInit(): void {}
  Iniciar(x0) {
    this.count += 1;
    this.x0 = this.getXi(x0);
    this.ri = this.getRi(this.m);
    this.ni = this.getNi(this.ri);
    this.listaNumeros.push({
      xi: this.x0,
      ri: this.ri,
      ni: this.ni,
    });

    if (this.count === parseInt(this.cantidad)) {
      console.log('terminar');
    } else {
      this.Iniciar(this.x0);
    }
  }

  getXi(x0) {
    return (this.a * x0) % this.m;
  }

  getRi(m) {
    return this.x0 / (m - 1);
  }

  getNi(ri) {
    return this.min + (this.max - this.min) * ri;
  }

  getA() {
    this.a = 8 * this.t + 3;
  }

  getM() {
    this.m = 2 ** this.g;
  }

  generar() {
    this.listaNumeros = [];
    this.count = 0;

    if (this.x0 > 0 && this.min > 0 && this.max > 0 && this.cantidad > 0) {
      if (this.min < this.max) {
        this.Iniciar(this.x0);
      } else {
        alert('min debe ser menor a max');
      }
    } else {
      alert('Fsota');
    }
  }
}
