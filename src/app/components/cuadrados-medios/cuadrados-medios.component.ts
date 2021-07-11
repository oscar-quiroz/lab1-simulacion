import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cuadrados-medios',
  templateUrl: './cuadrados-medios.component.html',
  styleUrls: ['./cuadrados-medios.component.css'],
})
export class CuadradosMediosComponent implements OnInit {
  count: number = 0;

  semilla: number = 0;
  min: number = 0;
  max: number = 0;
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

  init(semilla) {
    this.count += 1;
    this.xi = semilla;
    this.xi2 = Math.pow(this.xi, 2);
    this.extension = this.xi2.toString().length;
    this.extaccion = this.extract(this.xi2);
    this.ri = this.extaccion / 10000;
    this.ni = this.getNi(this.ri);
    this.listaNumeros.push({
      xi: this.xi,
      xi2: this.xi2,
      extension: this.extension,
      extaccion: this.extaccion,
      ri: this.ri,
      ni: this.ni,
    });

    if (this.count === parseInt(this.cantidad)) {
      console.log('terminar');
    } else {
      this.init(this.extaccion);
    }
  }

  getNi(ri) {
    return this.min + (this.max - this.min) * ri;
  }

  extract(number) {
    let length: number = number.toString().length;
    if (length % 2 != 0) {
      let result =
        (number / Math.pow(10, Math.floor((length - 4) / 2 + 1))) %
        Math.floor(Math.pow(10, 4));
      return Math.floor(result);
    } else {
      let result2 =
        (number / Math.pow(10, Math.floor((length - 4) / 2))) %
        Math.floor(Math.pow(10, 4));
      return Math.floor(result2);
    }
  }

  generate() {
    this.listaNumeros = [];
    this.count = 0;
    if (this.semilla > 0 && this.min > 0 && this.max > 0 && this.cantidad > 0) {
      if (this.min < this.max) {
        this.init(this.semilla);
      } else {
        alert('min debe ser menor a max');
      }
    } else {
      alert('Fsota');
    }
  }
}
