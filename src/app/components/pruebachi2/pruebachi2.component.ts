import { Component, OnInit } from '@angular/core';
import * as inv_chi_2 from "inv-chisquare-cdf";

@Component({
  selector: 'app-pruebachi2',
  templateUrl: './pruebachi2.component.html',
  styleUrls: ['./pruebachi2.component.css']
})
export class Pruebachi2Component implements OnInit {  
 
  Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
  };

  /**
   * Realiza la prueba chi2 a un conjunto de datos
   * @author Jhon Edison Rodriguez
   * @date 2021-08-13
   * @param {any} intevalos el numero de intervalos en el que se separa
   * @param {any} data    el conjunto de datos a evaluar
   * @returns {Object} {intervals,f_esperada,sum_chi2,...}
   */
  chi_e_test = function(intevalos:number,data:Array<number>){
    let res = this.separate_intervals(intevalos,data); // los intervalos separados
    let f_esp = data.length/intevalos;
    this.calculateFrecuency(data,res);
    let chi_sum = 0;
    res.forEach(element => { //calculamos chi en base a la frecuencia
      element.chi2 = (element.f - f_esp)**2 / f_esp
      chi_sum += element.chi2;
    });    
    let gl = intevalos-1; // grados de libertad
    let test_result = inv_chi_2.invChiSquareCDF(0.05,gl);//calculo de la funcion equivalente a prueba.chi.inv de exel
    return {
      intervals:res,
      f_esperada:f_esp,
      sum_chi2:chi_sum,
      gl:gl,
      test_result:test_result,
      final_result: test_result<chi_sum?true:false
    }
  }

  /**
   * Calcula la frecuencia de un conjunto de datos en los intervalos dados
   * @author Jhon Edison Rodriguez
   * @date 2021-08-13
   * @param {any} data el conjunto de datos 
   * @param {any} intervals el grupo de intervalos en el que se quieren clasificar los datos
   * @returns {void}
   */
  calculateFrecuency = function (data:Array<number>,intervals) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j< intervals.length; j++) {
          data[i] >= intervals[j].li && data[i] < intervals[j].ls ? intervals[j].f++:{};
      }      
    }
  }

  /**
   * Crea un arreglo de intervalos con sus valores minimos maximos y una frecuencia
   * @author Jhon Edison Rodriguez
   * @date 2021-08-13
   * @param {number} intervalos el numero de intervalos que se desea
   * @param {Array} data: los datos a evaluar
   * @returns {Array<object>} el esultado de los intervalos en un objeto
   */
  separate_intervals = function(intervalos:number,data:Array<number>){
    let n = data.length;
    let int_length = n/intervalos;
    let min = Math.floor(Math.min(...data));
    let max = Math.ceil(Math.max(...data));
    let inicial = min;
    let interv_frecuency = [];
    for (let index = 0; index < intervalos; index++) {      
      this.interv_frecuency.push({li:inicial,ls:inicial+int_length,f:0})
      inicial = inicial+int_length;
    }
    return interv_frecuency;
  }
  
  /**
   * Organiza un arreglo mediante el metodo de burbuja (no utilizado)
   * @author Jhon Edison Rodriguez
   * @date 2021-08-13
   * @param {any} arr el arreglo que se quiere reorganizar
   * @param {any} compare metodo de comparacion del algoritmo de ordenamiento
   * @returns {Array} 
   */
  sorting = function bubbleSort(arr, compare = this.defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // refer to note below
            if (compare(arr[j], arr[j + 1]) === this.Compare.BIGGER_THAN) {
                this.swap(arr, j, j + 1);
            }
        }
    }
    return arr;
  }

  /**
   * reliza un intercambio de lugar de las variables ubicadas en los index ay b 
   * @author Jhon Edison Rodriguez
   * @date 2021-08-13
   * @param {any} arr el alleglo al que se le quiere hace un inercambio en sus valores 
   * para el proceso de organizacion
   * @param {any} a index del objeto a que cambiara de posicion
   * @param {any} b index del objeto b que cambiara de posicion
   * @returns {none}
   */
  swap = function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }  

  defaultCompare = function defaultCompare(a, b) {
      if (a === b) {
          return 0;
      }
      return a < b ? this.Compare.LESS_THAN : this.Compare.BIGGER_THAN;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
