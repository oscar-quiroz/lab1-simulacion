import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicativas',
  templateUrl: './multiplicativas.component.html',
  styleUrls: ['./multiplicativas.component.css'],
})
export class MultiplicativasComponent implements OnInit {
  count: number = 0;

  semilla: number = 0;

  x0: number = 0;
  k: number = 0;
  c: number = 0;
  g: number = 0;
  a: number = 0;
  m: number = 0;

  min: number = 0;
  max: number = 0;
  cantidad;

  xi: number = 0;
  xi2: number = 0;

  ri: number = 0;
  ni: number = 0;

  listaNumeros = [];

  constructor() {}

  ngOnInit(): void {}

  getA() {
    this.a = 1 + 2 * this.k;
  }

  getM() {
    this.m = 2 ** this.g;
  }
}
