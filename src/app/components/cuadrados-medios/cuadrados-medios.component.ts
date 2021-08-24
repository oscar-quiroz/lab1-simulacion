import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//clase para generar los numeros pseudoaleatorisos
class pseudogenerator {
  public seed: number;
  public list = [];
 




  constructor(seed: number) {
    this.seed = seed;
  }
  generate = (
    min: number,
    max: number,
    amount: number,
    newxi: number = NaN
  ) => {
    let xi = newxi ? newxi : this.seed;
    let xiSquared = xi ** 2;
    let xiSLength = ('' + xiSquared).length;
    let xBetween =
      xiSLength % 2 != 0 || xiSLength - ('' + xi).length < 4
        ? Math.floor(
            (xiSquared / 10 ** Math.floor((xiSLength - 4) / 2 + 1)) % 10000
          )
        : Math.floor(
            (xiSquared / 10 ** Math.floor((xiSLength - 4) / 2)) % 10000
          );
    let ri = xBetween / 10000;
    let ni = min + (max - min) * ri;

    this.list.find(obj => obj.ni === ni) != undefined ? this.list.push({ xi, xiSquared, xiSLength, xBetween, ri, ni,repeated:true }): this.list.push({ xi, xiSquared, xiSLength, xBetween, ri, ni,repeated:false });
    let amountxi = amount - 1;
    if (amountxi > 0) {
      this.generate(min, max, amountxi, xBetween);
    } else return true;
    return;
  };
}

@Component({
  selector: 'app-cuadrados-medios',
  templateUrl: './cuadrados-medios.component.html',
  styleUrls: ['./cuadrados-medios.component.css'],
})

export class CuadradosMediosComponent implements OnInit {


  repeated = "repeat"
  valid = "no_repeat"

  count: number = 0;

  semilla: number = 1597;
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

  generar() {
    if (this.semilla === 0) {
      alert('debe ingresar todos los campos');
    } else {
      let generador = new pseudogenerator(this.semilla);
      generador.generate(this.min, this.max, this.cantidad);
      console.log(generador.list);
      this.listaNumeros = generador.list;
    }
  }
}
