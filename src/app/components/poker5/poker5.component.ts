import { Component, OnInit } from '@angular/core';
import * as inv_chi_2 from "inv-chisquare-cdf";
import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-poker5',
  templateUrl: './poker5.component.html',
  styleUrls: ['./poker5.component.css']
})
export class Poker5Component implements OnInit {
  isLoad: boolean;
  isValid: boolean;
  mostrar: boolean = false;

  objetoTabla:any={}

  constructor(private ListService:ListService) { }
  
  /**
   * Realiza la prueba de poker a un conjunto de datos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-24
   * @param {any} data:Array<number>
   * @returns {any}
   */
  poker_test = function(data) {
    //reducimos el número de decimales a 5 y los extraemos
    if( !data || data.length == 0 ){
      this.isLoad = false;
      alert("por favor importe un conjunto de datos")
      return
    }else{
      let myFunc = num => Number(num);
    if(data[0]/100000 != 0){
      data.forEach((value,index)=>{
        data[index] = parseFloat(value.toFixed(7).slice(0,-1));
        data[index] = (""+data[index]).slice(2,7);        
        data[index] = String(data[index]).split("").map((num)=>{ return Number(num)}).sort((a,b)=>a-b).join('')
        if(data[index].length === 4){
          data[index] = '0'+data[index]
        }     
      });
    }
    // usamos rexpreciones regulares
    let detector_pares = /(\d+?)\1/g
    let detector_triples = /(\d+?)\1{2}/g
    let detector_scuads = /(\d+?)\1{3}/g
    let detector_quintuplas = /(\d+?)\1{4}/g
    // numero de datos
    let n = data.length;
    // tabla de prueba
    let P_table = [
      {cat:'D',Oi:0,prob:0.3024,Ei:n*0.3024,val:0},// todos diferentes
      {cat:'O',Oi:0,prob:0.5040,Ei:n*0.5040,val:0},// un par 
      {cat:'T',Oi:0,prob:0.1080,Ei:n*0.1080,val:0},// dos pares
      {cat:'K',Oi:0,prob:0.0720,Ei:n*0.0720,val:0},// tercia
      {cat:'F',Oi:0,prob:0.0090,Ei:n*0.0090,val:0},// tercia y par
      {cat:'P',Oi:0,prob:0.0045,Ei:n*0.0045,val:0},// cuatro iguales
      {cat:'Q',Oi:0,prob:0.0001,Ei:n*0.0001,val:0},// quintillas
    ]
    try {
      console.log(data)
    } catch (error) {
      console.error(error)
    }
    // recorremos los daos para calcular las frecuencias de cada categoria
    data.forEach(element => {
      if(this.getFrecOnRegex(detector_pares,element)==1){// suma uno a la categoria O
        P_table[1].Oi++
      }else if(this.getFrecOnRegex(detector_pares,element)==2){// suma uno a la categoria de dos pares
        P_table[2].Oi++
      }else if(this.getFrecOnRegex(detector_triples,element)==1 && this.getFrecOnRegex(detector_pares,element)==1){// suma uno a la categoria de tercia y par
        P_table[4].Oi++
      }else if(this.getFrecOnRegex(detector_triples,element)==1){// suma uno a la categoria de tripla
        P_table[3].Oi++
      }else if(this.getFrecOnRegex(detector_scuads,element)==1){// suma uno a la categoria de cuatro iguales
        P_table[5].Oi++
      }else if(this.getFrecOnRegex(detector_quintuplas,element)==1){// suma uno a la categoria de quintuplas
        P_table[6].Oi++
      }else{
        P_table[0].Oi++ // todos son diferentes
      }
    });

    //calculamos el valor probabilistico
    P_table.forEach((element)=>{
      element.val = (element.Ei-element.Oi)**2 /element.Ei
    });

    //calculamos la sumatorioa de probabilidad
    let total = 0;
    P_table.forEach((element)=>{
      total = element.val;
    });

    let aceptable = inv_chi_2.invChiSquareCDF(0.05,6);

    if(total<aceptable){
      // paso la prueba
      return {
        details:P_table,
        valid:true,
        sum:total,
        chi2:aceptable
      }
    }
    return{
      details:P_table,
      valid:false,
      sum:total,
      chi2:aceptable
    }
    }
    
  }

  /**
   * debido a un error en la implementacion de RegExp se debe evaluar el match manualmente pos pasos
   * @author Jhon Edison Rodriguez Maldonado
   * @date 2021-08-25
   * @param {any} regex:RegExp
   * @param {any} array:Array<number>
   * @returns {any}
   */
  getFrecOnRegex = function (regex:RegExp,element){
    let counter = 0;    
    while(true){
      let res = regex.exec(''+element);
      if(res==null){
        return counter;          
      }  else{
        counter++
      }      
    }       
  }

  iniciar = function () {
    this.isLoad = true;
    setTimeout(() => {
      this.mostrar = true;
      let listaAux = this.poker_test(this.ListService.lista_de_numeros)
      if (listaAux.valid) {
        console.log('los datos pasaron las pruebas');
        this.isLoad = false;
        this.isValid = true;
      } else {
        console.log('los datos no pasaron als pruebas');
        this.isLoad = false;
        this.isValid = false;
      }
      console.log(listaAux)
      this.objetoTabla = listaAux;
    }, 500); 
       
  }
  
  ngOnInit(): void {
  }

}
