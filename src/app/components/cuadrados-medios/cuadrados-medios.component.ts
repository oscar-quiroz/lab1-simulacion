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
  extension:number=0;

  xi:number=0;
  xi2:number=0;
  extaccion:number=0;
  ri:number = 0;
  ni:number = 0;


  constructor() { }
 
  

  ngOnInit(): void {
  }


  encontrarPrimero(){
    this.xi= this.semilla;
    this.xi2 = Math.pow(this.xi,2);
    this.extension= this.xi2.toString().length
    this.extaccion = this.extraer(this.xi2)
    this.ri= this.extaccion/10000;
    this.ni = this.encontrarNi(this.ri)
  }

  encontrarNi(ri){
      return    this.min + ( (this.max - this.min)*ri)
  }


  extraer(number){
    let longitud:number = number.toString().length
    console.log(longitud)
    if(longitud %2 != 0){
      let result =  number / Math.pow(10, Math.floor(((longitud -4)  / 2)+1)) % Math.floor(Math.pow(10,4))
      
      return Math.floor(result)
    }else {
      let result2 =  number / Math.pow(10, Math.floor(((longitud -4)  / 2)+1)) % Math.floor(Math.pow(10,4))
     
      return Math.floor(result2)
    }
  }



  generar(){
    if(this.semilla>0 && this.min>0 && this.max>0 && this.cantidad>0  ){
      if(this.min< this.max){
        this.encontrarPrimero()
        alert("sirveeeeeeeeeee")
      }else{

        alert("min debe ser menor a max")
      }
    }else{
      alert("Fsota")
    }
  }

}
