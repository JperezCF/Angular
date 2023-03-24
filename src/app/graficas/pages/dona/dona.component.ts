import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ], backgroundColor: ['#ED0CF6', '#6100EB', '#0C29F6'] },
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';
  
    // events
    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    

}
