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

    //dummy values for testing
    fxrateDummy: CryptoTime[]  = [
      {
        "time_period_start": "2021-03-02T00:00:00.0000000Z",
        "time_period_end": "2021-03-02T00:01:00.0000000Z",
        "time_open": "2021-03-02T00:00:00.0000000Z",
        "time_close": "2021-03-02T00:01:00.0000000Z",
        "rate_open": 49642.89075974334,
        "rate_high": 49642.89075974334,
        "rate_low": 49642.89075974334,
        "rate_close": 49642.89075974334
      },
      {
        "time_period_start": "2021-03-03T00:01:00.0000000Z",
        "time_period_end": "2021-03-03T00:02:00.0000000Z",
        "time_open": "2021-03-03T00:01:00.0000000Z",
        "time_close": "2021-03-03T00:02:00.0000000Z",
        "rate_open": 49649.71537706716,
        "rate_high": 49649.71537706716,
        "rate_low": 49649.71537706716,
        "rate_close": 49649.71537706716
      },
      {
        "time_period_start": "2021-03-04T23:59:00.0000000Z",
        "time_period_end": "2021-03-04T00:00:00.0000000Z",
        "time_open": "2021-03-04T23:59:00.0000000Z",
        "time_close": "2021-03-04T00:00:00.0000000Z",
        "rate_open": 48348.04226728628,
        "rate_high": 48348.04226728628,
        "rate_low": 48348.04226728628,
        "rate_close": 48348.04226728628
      },
      {
        "time_period_start": "2021-03-05T23:59:00.0000000Z",
        "time_period_end": "2021-03-05T00:00:00.0000000Z",
        "time_open": "2021-03-05T23:59:00.0000000Z",
        "time_close": "2021-03-05T00:00:00.0000000Z",
        "rate_open": 47148.04226728628,
        "rate_high": 47148.04226728628,
        "rate_low": 47148.04226728628,
        "rate_close": 47148.04226728628
      },
      {
        "time_period_start": "2021-03-06T23:59:00.0000000Z",
        "time_period_end": "2021-03-06T00:00:00.0000000Z",
        "time_open": "2021-03-06T23:59:00.0000000Z",
        "time_close": "2021-03-06T00:00:00.0000000Z",
        "rate_open": 44348.04226728628,
        "rate_high": 44348.04226728628,
        "rate_low": 44348.04226728628,
        "rate_close": 44348.04226728628
      },
      {
        "time_period_start": "2021-03-07T23:59:00.0000000Z",
        "time_period_end": "2021-03-07T00:00:00.0000000Z",
        "time_open": "2021-03-07T23:59:00.0000000Z",
        "time_close": "2021-03-07T00:00:00.0000000Z",
        "rate_open": 46348.04226728628,
        "rate_high": 46348.04226728628,
        "rate_low": 46348.04226728628,
        "rate_close": 46348.04226728628
      },
      {
        "time_period_start": "2021-03-08T23:59:00.0000000Z",
        "time_period_end": "2021-03-08T00:00:00.0000000Z",
        "time_open": "2021-03-08T23:59:00.0000000Z",
        "time_close": "2021-03-08T00:00:00.0000000Z",
        "rate_open": 48348.04226728628,
        "rate_high": 48348.04226728628,
        "rate_low": 48348.04226728628,
        "rate_close": 48348.04226728628
      }
    ];

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
