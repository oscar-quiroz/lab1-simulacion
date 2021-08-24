import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-poker5',
  templateUrl: './poker5.component.html',
  styleUrls: ['./poker5.component.css']
})
export class Poker5Component implements OnInit {

  constructor(private ListService:ListService) { }
  
  /**
   * realiza la prueba de poker a un conjunto de datos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-24
   * @param {any} data:Array<number>
   * @returns {any}
   */
  poker_test = function(data: Array<number>) {
    //reducimos el número de decimales a  5
    data.forEach(number => number = parseFloat(number.toFixed(6).slice(0,-1)))
    let P_table = [
      {},
      {},
      {},
      {},
      {}
    ]
  }

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
  

  ngOnInit(): void {
  }

}
