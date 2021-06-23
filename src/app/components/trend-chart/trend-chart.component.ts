import { Component, OnInit, Input } from '@angular/core';

import { CryptoapiService } from 'src/app/services/cryptoapi.service';
import { CryptoTime } from 'src/app/interfaces/crypto-interface';

@Component({
  selector: 'app-trend-chart',
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.scss']
})
export class TrendChartComponent implements OnInit {

    @Input() cryptoId: string = 'ETH';
    
    fxrate: CryptoTime[];
    chartData: {name: string, value: number}[];


    //viewport size
    view: any[] = [600, 300];
  
    //Chart options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Day';
    showYAxisLabel = true;
    yAxisLabel = 'Rate';
      
    //color
    colorScheme = {
      domain: ['#ffcc33']
    };

  constructor(private cryptoapiService: CryptoapiService) { }

  ngOnInit(): void {
    this.cryptoapiService.getTimeSeries(this.cryptoId).subscribe(cr => {
      this.fxrate = cr;

      this.chartData = this.fxrate.map(item => {
        const container = {name: "", value: 0};
        const date = new Date(item.time_period_start);
        let dateString: string = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;

        container.name = dateString;
        container.value = item.rate_close;
    
        return container;
      });
    });
  }


  onSelect(event) {
    console.log(event);
  }

}
