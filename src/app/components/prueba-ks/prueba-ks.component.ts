import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-prueba-ks',
  templateUrl: './prueba-ks.component.html',
  styleUrls: ['./prueba-ks.component.css'],
})
export class PruebaKsComponent implements OnInit {
  numinter :number = 10;
  /**
   * aplica la prueba KS a un arreglo de numeros
   * @date 2021-08-22
   * @param {any} data:Array<number>
   * @param {any} ni:number
   * @returns {any}
   */
  make_ks_test = function (data: Array<number>) {  
    if (!data || data.length == 0){
      alert("por favor importe un conjunto de datos")
      return
    } 
    let ni = this.numinter; 
    let intervals = this.separate_intervals(ni, data);
    this.calculateFrecuency(data, intervals);
    this.calculate_cumulative_frecuency(intervals);
    this.calculate_prob_obtained(intervals, data.length);
    this.calculate_expected_frecuency(intervals, data.length, ni);
    this.calculate_expected_probability(intervals, data.length);
    this.calculate_main_diferencial(intervals);
    let max_p_dif = -1;
    for (let index = 0; index < intervals.length; index++) {
      intervals[index].dif > max_p_dif
        ? (max_p_dif = intervals[index].dif)
        : (max_p_dif = max_p_dif);
    }
    let max_acepted_p_dif = this.get_ks_test_value(data.length);
    if (max_p_dif < max_acepted_p_dif){
      return {intervals:intervals,result:true}
    }else{
      return {intervals:intervals,result:false}
    }
  };

  /**
   * retorna el valor de prueba de la tabla ks
   * nota: solo funciona para una aceptacion de 95%
   * y alpha de 0.05
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-22
   * @param {any} n el numero de datos del areglo
   * @returns {any}
   */
  get_ks_test_value = function (n: number) {
    let values = [
      [1, 0.975],
      [2, 0.84189],
      [3, 0.7076],
      [4, 0.62394],
      [5, 0.56327],
      [6, 0.51926],
      [7, 0.48343],
      [8, 0.45427],
      [9, 0.43001],
      [10, 0.40925],
      [11, 0.39122],
      [12, 0.37543],
      [13, 0.36143],
      [14, 0.3489],
      [15, 0.3376],
      [16, 0.32733],
      [17, 0.31796],
      [18, 0.30936],
      [19, 0.30142],
      [20, 0.29408],
      [21, 0.28724],
      [22, 0.28087],
      [23, 0.27490],
      [24, 0.26931],
      [25, 0.26404],
      [26, 0.25907],
      [27, 0.25438],
      [28, 0.24993],
      [29, 0.24571],
      [30, 0.24170],
      [31, 0.23788],
      [32, 0.23424],
      [33, 0.23076],
      [34, 0.22743],
      [35, 0.22424],
      [36, 0.22119],
      [37, 0.21826],
      [38, 0.21544],
      [39, 0.21273],
      [40, 0.21017],      
      [45, 0.19842],
      [50, 0.18845],
    ];
    if (n <= 50) {// el valor esta en la tabla
      let svalue = values.find(e=> e[0] == n)[1];
      if(svalue){
        return svalue;
      }else{
        throw new Error('valor no disponible en la tabla de probabilidad K-S que se tiene :(')
      }
    } else { //el valor se calcula
      return 1.35810/n**0.5
    } 
  };

  /**
   * calcula la diferencia entre la probabilida esperada y la obtenida para cada intevalo
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @returns {any}
   */
  calculate_main_diferencial = function (intervals) {
    for (let index = 0; index < intervals.length; index++) {
      intervals[index].dif = Math.abs(
        intervals[index].Pea - intervals[index].Pobt
      );
    }
  };

  /**
   * calculamos la probabilidad esperada acumulada de un grupo de  intervalos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @param {any} n:number
   * @returns {any}
   */
  calculate_expected_probability = function (intervals, n: number) {
    for (let index = 0; index < intervals.length; index++) {
      intervals[index].Pea = intervals[index].fea / n;
    }
  };

  /**
   * calculamos la frecuencia esperada acumulada de un grupo de intervalos
   * @author Jhon Edison rodfriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @param {any} n numero de datos
   * @param {any} ni numero de intervalos
   * @returns {any}
   */
  calculate_expected_frecuency = function (intervals, n: number, ni: number) {
    let base = n / ni;
    intervals[0].fea = n / ni;
    for (let index = 1; index < intervals.length; index++) {
      intervals[index].fea = intervals[index - 1].fea + base;
    }
  };

  /**
   * calcula la probabilidad acumulada obtenida
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervals
   * @param {any} n:number
   * @returns {any}
   */
  calculate_prob_obtained = function (intervals, n: number) {
    for (let index = 0; index < intervals.length; index++) {
      intervals[index].Pobt = intervals[index].fa / n;
    }
  };

  /**
   * calcula la frecuencia acumulada y la agrega a un grupo de intervalos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18s
   * @param {any} intervals
   * @returns {any}
   */
  calculate_cumulative_frecuency = function (intervals) {
    let amount = 0;
    for (let index = 0; index < intervals.length; index++) {
      amount += intervals[index].f;
      intervals[index].fa = amount;
    }
  };

  /**
   * calcula las frecuencias de los valores dentro de los intervalos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} data arreglo de datos
   * @param {any} intervals arreglo de objetos con los intervalos
   * @returns {any}
   */
  calculateFrecuency = function (data: Array<number>, intervals) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < intervals.length; j++) {
        data[i] >= intervals[j].li && data[i] < intervals[j].ls
          ? intervals[j].f++
          : {};
      }
    }
  };

  /**
   * separa un areglo de Ri en intervalos deseados
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-18
   * @param {any} intervalos:number
   * @param {any} data:Array<number>
   * @returns {any}
   */
  separate_intervals = function (intervalos: number, data: Array<number>) {
    let n = data.length;    
    let min = Math.floor(Math.min(...data));
    let max = Math.ceil(Math.max(...data));
    let int_length =  (max-min)/intervalos;  
    let inicial = min;
    let interv_frecuency = [];
    for (let index = 0; index < intervalos; index++) {
      interv_frecuency.push({ li: inicial, ls: inicial + int_length, f: 0, });
      inicial = inicial + int_length;
    }
    return interv_frecuency;
  };

  constructor(private ListService:ListService) { }

  iniciar = function () {
    console.log(this.make_ks_test(this.ListService.lista_de_numeros));
  }
  ngOnInit(): void {}
}
