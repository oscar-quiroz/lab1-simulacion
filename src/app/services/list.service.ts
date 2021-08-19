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
    this.lista_de_numeros = numeros.split(',');
  }

  getLength():number{
     return this.lista_de_numeros.length;
  }
}
