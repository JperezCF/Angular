import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  doughnutData = {
    "MetricsReportsState":
    [
      {
        "label":"Efectiva",
        "value":545
      },
      {
        "label":"Repetida",
        "value":544
      },
      {
        "label":"Sin información",
        "value":94
      },
      {
        "label":"VIN inválido",
        "value":3
    }
    ]
  
  }
  doughnutValue: number[]  = [];
  doughnutlabel: String[]  = [];
  doughnutChartData: ChartData<'doughnut'> | undefined;
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartOptions: ChartConfiguration['options'];
  

  constructor() { }

  // Doughnut
  ngOnInit(): void {

  this.getGraphs();
    
  }
  


  getGraphs(){

    this.doughnutChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    }
    this.doughnutChartData = {
      labels: this.doughnutlabel,
      datasets: [
        { data: [], backgroundColor: ['#ED0CF6', '#6100EB', '#0C29F6'] },
      ]
    };
    
    this.doughnutData.MetricsReportsState.forEach((element) => {
      this.doughnutlabel.push(element.label);      
      this.doughnutValue.push( element.value);

    });
    this.doughnutChartData.datasets[0].data = this.doughnutValue;
  }
}
