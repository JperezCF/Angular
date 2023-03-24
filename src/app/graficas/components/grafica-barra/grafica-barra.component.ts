import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() label: string[] = []
  @Input() public barChartData: ChartData<'bar'> = {
    labels: [ 
      // '2020', '2021', '2022', '2023', '2024', '2025', '2026' 
    ],
    datasets: [
      
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#C55FE8', hoverBackgroundColor:'blue' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#636DF2', hoverBackgroundColor:'blue' },
      // { data: [ 8, 33, 70, 59, 16, 97, 30 ], label: 'Series C', backgroundColor:'#7C65DB',  hoverBackgroundColor:'blue'},
    ],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
  };
  public barChartType: ChartType = 'bar';


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor() {
    
  }
  
  ngOnInit(): void {
    if( this.horizontal ){
      this.barChartOptions = {
        indexAxis: 'y'
      }
      // this.barChartType = 'horizontalBar';
    }
  }

}
