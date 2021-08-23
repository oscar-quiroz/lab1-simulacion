import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  private lista_de_numeros = [];

  get lista() {
    return [...this.lista_de_numeros];
  }

  constructor() {}

  addList(numeros){
    let trimed = numeros.replaceAll(/\n/g,'');
    this.lista_de_numeros = trimed.split`,`.map(x=>+x)
  }

  getLength():number{
     return this.lista_de_numeros.length;
  }
}
