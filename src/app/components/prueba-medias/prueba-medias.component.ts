import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-medias',
  templateUrl: './prueba-medias.component.html',
  styleUrls: ['./prueba-medias.component.css']
})

export class PruebaMediasComponent implements OnInit {
  aceptacion : number = 0.95;
  alfa : number = 0.05;
  n: number = -1;
  R : number = -1;
  uno_menos_alfa_medios :number = 1- (this.alfa/2);
  z: number = -1;
  li: number = -1;
  ls: number = -1;

  getmedia = function (data: Array<number>) {    
    return data.reduce((a, b) => a + b, 0) / data.length
  }

  getVarianzaPoblacion = function (data: Array<number>) {
    let mean = this.getmedia(data)
    return data.reduce((a,b)=>a + (b-mean)**2,0) / mean
  }

  getVarianzaMuestra = function (data: Array<number>) {
    let mean = data.reduce((a, b) => a + b, 0) / (data.length -1)
    return data.reduce((a,b)=>a + (b-mean)**2,0) / mean
  }

  getDesviacionEstandar= function (data:Array<number>) {
    return this.getVarianzaPoblacion(data) ** 0.5
  }

  percentile_z = function percentile_z(p) {
    if (p < 0.5) return -percentile_z(1-p);
    if (p > 0.92) {
        if (p == 1) return Infinity;
        let r = Math.sqrt(-Math.log(1-p));
        return (((2.3212128*r+4.8501413)*r-2.2979648)*r-2.7871893)/
               ((1.6370678*r+3.5438892)*r+1);
    }
    p -= 0.5;
    let r = p*p;
    return p*(((-25.4410605*r+41.3911977)*r-18.6150006)*r+2.5066282)/
             ((((3.1308291*r-21.0622410)*r+23.0833674)*r-8.4735109)*r+1);
  }

  lim_inferior = function(data: Array<number>){
    return 0.5 - (this.uno_menos_alfa_medios*(1/(12*data.length)**0.5))
  }

  lim_superior = function (data: Array<number>) {
    return 0.5 + (this.uno_menos_alfa_medios*(1/(12*data.length)**0.5))
  }

  validate = function(data:Array<number>){    
    this.n = data.length;   
    this.R = this.getmedia(data);   
    this.z = this.percentile_z(this.uno_menos_alfa_medios)
    this.li = this.lim_inferior(data);
    this.ls = this.lim_superior(data);
    let valid =  this.R > this.li && this.R <this.ls ? true : false;
    return {
      n:this.n,
      R:this.R,
      uno_menos_alfa_medios:this.uno_menos_alfa_medios,
      z : this.z,
      li : this.li,
      ls : this.ls,
      valid : true
    }
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
