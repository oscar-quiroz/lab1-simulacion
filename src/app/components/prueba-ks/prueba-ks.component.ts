import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-ks',
  templateUrl: './prueba-ks.component.html',
  styleUrls: ['./prueba-ks.component.css']
})
export class PruebaKsComponent implements OnInit {


  make_ks_test = function(data:Array<number>,ni:number){
    let aceptacion = 0.95;
    let alpha = 0.05;
    let intervals = this.separate_intervals(ni,data);
    this.calculateFrecuency(data,intervals);
    this.calculate_cumulative_frecuency(intervals);
    this.calculate_prob_obtained(intervals,data.length);
    this.calculate_expected_frecuency(intervals,data.length,ni);
    this.calculate_expected_probability(intervals,data.length);
    this.calculate_main_diferencial(intervals);
    let max_p_dif = -1;
    for (let index = 0; index < intervals.length; index++) {      
      intervals[index].dif > max_p_dif ? max_p_dif = intervals[index].dif: max_p_dif = max_p_dif; 
    }
    let max_acepted_p_dif = 0
  }

  get_ks_test_value = function(n:number){
    let values = [ 0.97500,0.84189,0.70760,0.62394,0.56327,0.51926,0.48343,0.45427,0.43001,0.40925,
      0.39122,0.37543,0.36143,0.34890,0.33760,0.32733,0.31796,0.30936,0.30142,0.29407,
      0.26404,0.24170,0.22424,0.21017,0.19842,0.18845];
    

  }


  /**
   * calcula la diferencia entre la probabilida esperada y la obtenida para cada intevalo
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @returns {any}
   */
  calculate_main_diferencial = function(intervals){
    for (let index = 0; index < intervals.length; index++) {      
      intervals[index].dif = Math.abs(intervals[index].Pea - intervals[index].Pobt)
    }
  }

  /**
   * calculamos la probabilidad esperada acumulada de un grupo de  intervalos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @param {any} n:number
   * @returns {any}
   */
  calculate_expected_probability = function(intervals,n:number){
    for (let index = 0; index < intervals.length; index++) {      
      intervals[index].Pea = intervals[index].fea / n
    }
  }


  /**
   * calculamos la frecuencia esperada acumulada de un grupo de intervalos
   * @author Jhon Edison rodfriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @param {any} n numero de datos
   * @param {any} ni numero de intervalos
   * @returns {any}
   */
  calculate_expected_frecuency = function (intervals,n:number,ni:number) {
    let base =  n/ni;
    intervals[0].fea = n/ni;
    for (let index = 1; index < intervals.length; index++) {
      intervals[index].fea = intervals[index -1].fea + base
    }
  }

  /**
   * calcula la probabilidad acumulada obtenida
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @param {any} n:number
   * @returns {any}
   */
  calculate_prob_obtained = function(intervals,n:number){
    for (let index = 0; index < intervals.length; index++) {      
      intervals[index].Pobt = intervals[index].fa / n
    }
  }

  /**
   * calcula la frecuencia acumulada y la agrega a un grupo de intervalos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18s
   * @param {any} intervals
   * @returns {any}
   */
  calculate_cumulative_frecuency = function(intervals){
    let amount = 0;
    for (let index = 0; index < intervals.length; index++) {
        amount =+ intervals[index].f;
        intervals[index].fa = amount;
    }
  }

  /**
   * calcula las frecuencias de los valores dentro de los intervalos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} data arreglo de datos
   * @param {any} intervals arreglo de objetos con los intervalos
   * @returns {any}
   */
  calculateFrecuency = function (data:Array<number>,intervals) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j< intervals.length; j++) {
          data[i] >= intervals[j].li && data[i] < intervals[j].ls ? intervals[j].f++:{};
      }      
    }
  }

  /**
   * separa un areglo de Ri en intervalos deseados
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervalos:number
   * @param {any} data:Array<number>
   * @returns {any}
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

  constructor() { }

  ngOnInit(): void {

  }

}
