import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-proyect';
  primeraEdad;
  segundaEdad;
  promedio;
  suma;
  Calcular(){
    this.suma=this.primeraEdad+this.segundaEdad
    this.promedio=this.suma/2
    
  }
  Limpiar(){
    this.primeraEdad=null;
    this.segundaEdad=null;
    this.suma=null;
    this.promedio=null;
  }
}
