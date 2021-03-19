import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  title = 'Ejercitación';
  primeraEdad:number;
  segundaEdad:number;
  promedio:string;
  suma:string;
  Calcular(){
    let sumatoria
    sumatoria=this.primeraEdad+this.segundaEdad
    this.suma='Suma = '+sumatoria
    this.promedio='Promedio = '+sumatoria/2
    
  }
  Limpiar(){
    this.primeraEdad=null;
    this.segundaEdad=null;
    this.suma=null;
    this.promedio=null;
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
