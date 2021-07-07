import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css'],
})
export class NormalComponent implements OnInit {
  count: number = 0;

  semilla: number = 0;
  min: number = 0;
  max: number = 0;
  cantidad;
  extension: number = 0;

  xi: number = 0;
  xi2: number = 0;
  extaccion: number = 0;
  ri: number = 0;
  ni: number = 0;

  listaNumeros = [];

  constructor() {}

  ngOnInit(): void {}
}