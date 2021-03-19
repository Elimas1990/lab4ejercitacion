import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-proyect';
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
}
