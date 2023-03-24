import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesUsuariosDonaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values;
        
      });
  }

  
//Labels contruidos de forma dinamica
public doughnutChartLabels: any [] = [ 
  // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
 ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 
        // 350, 450, 100 
        ], 
        backgroundColor: ['#ED0CF6', '#6100EB', '#0C29F6'] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
