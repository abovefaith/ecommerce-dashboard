import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss'] // Correct styleUrls
})
export class TopThreeProductsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top Three Products'
    },
    xAxis: {
      categories: [
        'Product A', 'Product B', 'Product C'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Product A',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Product B',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'Product C',
            y: 275,
            color: '#ed9e20',
          }
        ]
      }
    ],
    credits: {
      enabled: false
    }
  };

  constructor() { }

  ngOnInit(): void { }
}
