import { Component, OnInit } from '@angular/core';
import * as inv_chi_2 from "inv-chisquare-cdf";
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-prueba-varianza',
  templateUrl: './prueba-varianza.component.html',
  styleUrls: ['./prueba-varianza.component.css']
})

export class PruebaVarianzaComponent implements OnInit {
  aceptacion : number = 0.95;
  alpha: number = 0.05;
  n : number = NaN;
  media : number = NaN;
  Varianza: number = NaN;
  DesvEdiv2:number = NaN;
  one_min_DesvEdiv2: number = NaN;
  ji2alphadiv2 : number = NaN;
  ji2minalphadiv2 : number = NaN;
  li : number = NaN;
  ls : number = NaN;

  isLoad: boolean;
  isValid: boolean;
  mostrar: boolean = false;


  objetoTabla:any={}

  /*
  * esta funcion obtiene la media de un conjunto de datos
  */
  getmedia = function (data: Array<number>) {    
    return data.reduce((a, b) => a + b, 0) / data.length
  }
  /*
  * esta funcion obtiene la varianza de una poblacion
  */
  getVarianzaPoblacion = function (arr: Array<number>) {
    let mean = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })
    let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    return sum / arr.length
  }
  /*
  * esta funcion obtiene la varianza para una muestra
  */
  getVarianzaMuestra = function (data: Array<number>) {
    let mean = data.reduce((a, b) => a + b, 0) / (data.length -1)
    return data.reduce((a,b)=>a + (b-mean)**2,0) / mean
  }
  /*
  * esta funcion obtiene la desviacion estandar
  */
  getDesviacionEstandar= function (data:Array<number>) {
    return this.getVarianzaPoblacion(data) ** 0.5
  }

  pueba_varianza = function (data:Array<number>) {
    if (!data || data.length == 0){
      alert("por favor importe un conjunto de datos")
      this.isLoad = false;
      return
    }else{
      this.n =  data.length;
      this.media = this.getmedia(data);
      this.varianza = this.getVarianzaPoblacion(data);
      this.DesvEdiv2 = this.getDesviacionEstandar(data) / 2;
      this.one_min_DesvEdiv2 = 1-this.DesvEdiv2;
      console.log(this.varianza,this.DesvEdiv2)
      this.ji2alphadiv2 = inv_chi_2.invChiSquareCDF(this.DesvEdiv2,this.n-1);
      this.ji2minalphadiv2 = inv_chi_2.invChiSquareCDF(this.one_min_DesvEdiv2,this.n-1);
      this.li = this.ji2alphadiv2 /(12*this.n-1)
      this.ls = this.ji2minalphadiv2/(12*this.n-1)
      let valid =  this.varianza > this.li && this.varianza < this.ls ? true : false;
      return {
        alfa:this.alpha,
        n : this.n,
        media: this.media,
        varianza: this.varianza,
        desv_est_div_2: this.DesvEdiv2,
        uno_men_desv_est: this.one_min_DesvEdiv2,
        chi_cua_alpha: this.ji2alphadiv2,
        menos_chi_cua_alpha:this.ji2minalphadiv2,
        li:this.li,
        ls:this.ls,
        valid
      }
    }
    
  }

  iniciar = function () { 
    
    this.isLoad = true;
    setTimeout(() => {
      this.mostrar = true;
      let listaAux = this.pueba_varianza(this.ListService.lista_de_numeros)
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
    this.objetoTabla=this.pueba_varianza(this.ListService.lista_de_numeros)
    console.log(this.objetoTabla);
  }


  constructor(private ListService:ListService) { }
  
  ngOnInit(): void {

  }

}
