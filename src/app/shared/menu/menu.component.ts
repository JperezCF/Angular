import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  
menu: MenuItem [] = [
  {
    ruta: '/graficas/barra',
    texto:'Barras'
  },
  {
    ruta: '/graficas/barras-doble',
    texto:'Barras Doble'
  },
  {
    ruta: 'graficas/dona',
    texto:'Dona'
  },
  {
    ruta: '/graficas/dona-http',
    texto:'Donas Http'
  }
]
 

}
