import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {


proveedoresLabels: string[] = ['REPUVE', 'ROBO','PEDIMENTO','ADEUDOS',];
  
proveedoresData: ChartData<'bar'> = {
  labels: this.proveedoresLabels,
  datasets: [
    { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A' },
    { data: [ 50, 250, 30, 450, 200 ], label: 'Vendedor B'},
  ],
};
  

  

productoData: ChartData<'bar'> = {
  labels: this.proveedoresLabels,
   datasets: [

    // resultado rojo del los 4 semaforos
    { data: [ 200, 300, 400, 500 ], label: 'rojo', backgroundColor: 'red' },
    // resultado verde del los 4 semaforos
    { data: [ 100, 200, 300, 500 ], label: 'verde', backgroundColor: 'green' },
    // resultado amarillo del los 4 semaforos
    { data: [ 100, 200, 300, 500 ], label: 'amarilla', backgroundColor: 'yellow' },
    // resultado gris del los 4 semaforos
    { data: [  100, 200, 300, 500 ], label: 'gris', backgroundColor:  'grey'},
  ],
};

}
