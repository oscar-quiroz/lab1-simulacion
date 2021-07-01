import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cuadrados-medios',
  templateUrl: './cuadrados-medios.component.html',
  styleUrls: ['./cuadrados-medios.component.css']
})
export class CuadradosMediosComponent implements OnInit {

  semilla:number=0;
  min:number=0;
  max:number=0;
  cantidad:number=0;

  constructor() { }
 
  

  ngOnInit(): void {
  }


  generar(){
    if(this.semilla>0 && this.min>0 && this.max>0 && this.cantidad>0  ){
      if(this.min< this.max){

        alert("sirveeeeeeeeeee")
      }else{

        alert("min debe ser menor a max")
      }
    }else{
      alert("Fsota")
    }
  }

}
