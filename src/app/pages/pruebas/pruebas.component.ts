import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent implements OnInit {
  inputFile: any;
  file: any;
  auxInputFile: string = '';
  resultFile: any;
  ok = '';
  lsita = [];
  longitud=0;

  numeros: any;

  constructor( private listService:ListService) {}

  ngOnInit(): void {}

  leerArchivo(e) {
    this.ok = 'validate';
    this.auxInputFile = this.inputFile;
    let archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    let lector = new FileReader();
    lector.onload = (e) => {
      let contenido = e.target.result;
      this.numeros = contenido;

      this.lsita = this.numeros.split(',');
      this.listService.addList( this.numeros );
      this.imprimirLongitud();
    };
    lector.readAsText(archivo);
    
  }


  imprimirLongitud(){
    this.longitud = this.listService.getLength();
  }
}
