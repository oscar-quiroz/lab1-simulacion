import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-prueba-medias',
  templateUrl: './prueba-medias.component.html',
  styleUrls: ['./prueba-medias.component.css'],
})
export class PruebaMediasComponent implements OnInit {
  alfa: number = 0.05;
  aceptacion: number = 1 - this.alfa;
  n: number = -1;
  R: number = -1;
  uno_menos_alfa_medios: number = 1 - this.alfa / 2;
  z: number = -1;
  li: number = -1;
  ls: number = -1;

  isLoad: boolean;
  isValid: boolean;
  mostrar: boolean = false;

  /*
   * esta funcion obtiene la media de un conjunto de datos
   */
  getmedia = function (data: Array<number>) {
    return data.reduce((a, b) => a + b, 0) / data.length;
  };

  /*
   * esta funcion obtiene la varianza de una poblacion
   */
  getVarianzaPoblacion = function (arr: Array<number>) {
    let mean =
      arr.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / arr.length;
    arr = arr.map((k) => {
      return (k - mean) ** 2;
    });
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  };
  /*
   * esta funcion obtiene la varianza para una muestra
   */
  getVarianzaMuestra = function (data: Array<number>) {
    let mean = data.reduce((a, b) => a + b, 0) / (data.length - 1);
    return data.reduce((a, b) => a + (b - mean) ** 2, 0) / mean;
  };

  /*
   * esta funcion obtiene la desviacion estandar
   */
  getDesviacionEstandar = function (data: Array<number>) {
    return this.getVarianzaPoblacion(data) ** 0.5;
  };

  /*
   * esta funcion obtiene el valor de z de la tabla de distribucion normal
   */
  percentile_z = function percentile_z(p) {
    if (p < 0.5) return -percentile_z(1 - p);
    if (p > 0.92) {
      if (p == 1) return Infinity;
      let r = Math.sqrt(-Math.log(1 - p));
      return (
        (((2.3212128 * r + 4.8501413) * r - 2.2979648) * r - 2.7871893) /
        ((1.6370678 * r + 3.5438892) * r + 1)
      );
    }
    p -= 0.5;
    let r = p * p;
    return (
      (p *
        (((-25.4410605 * r + 41.3911977) * r - 18.6150006) * r + 2.5066282)) /
      ((((3.1308291 * r - 21.062241) * r + 23.0833674) * r - 8.4735109) * r + 1)
    );
  };
  /*
   * esta funcion obtiene el limite inferior
   */
  lim_inferior = function (data: Array<number>) {
    return 0.5 - this.uno_menos_alfa_medios * (1 / (12 * data.length) ** 0.5);
  };
  /*
   * esta funcion obtiene el limite superior
   */
  lim_superior = function (data: Array<number>) {
    return 0.5 + this.uno_menos_alfa_medios * (1 / (12 * data.length) ** 0.5);
  };

  /*
   * esta funcion valida si el conjunto de datos de entrada
   * cumple con la prueba de medias
   */
  validate = function (data: Array<number>) {
    if (!data || data.length == 0) {
      alert('por favor importe un conjunto de datos');
      this.isLoad=false
      return;
    }else{
      this.aceptacion = 1 - this.alfa;
      this.uno_menos_alfa_medios = 1 - this.alfa / 2;
      let n = data.length;
      let R = this.getmedia(data);
      let z = this.percentile_z(this.uno_menos_alfa_medios);
      let li = this.lim_inferior(data);
      let ls = this.lim_superior(data);
      let valid = R > li && R < ls ? true : false;
      return {
        alpha: this.alfa,
        aceptacion: this.aceptacion,
        n: n,
        R: R,
        uno_menos_alfa_medios: this.uno_menos_alfa_medios,
        z: z,
        li: li,
        ls: ls,
        valid: valid,
      };
    }
   
  };

  iniciar = function () {
    this.isLoad = true;
    setTimeout(() => {
      this.mostrar = true;
      let listaAux = this.validate(this.ListService.lista_de_numeros);
      if (listaAux.valid) {
        console.log('los datos pasaron las pruebas');
        this.isLoad = false;
        this.isValid = true;
      } else {
        console.log('los datos no pasaron als pruebas');
        this.isLoad = false;
        this.isValid = false;
      }
    }, 500);

    console.log(this.validate(this.ListService.lista_de_numeros));
  };

  constructor(private ListService: ListService) {}

  ngOnInit(): void {}
}
