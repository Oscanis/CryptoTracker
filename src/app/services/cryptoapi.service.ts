import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CryptoAsset, CryptoRate, CryptoTime } from '../interfaces/crypto-interface';

const httpOptions = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "headers": {'Content-Type': 'application/json',
            'X-CoinAPI-Key': '40496D5E-4024-4CC6-9F94-35B7A8B17077'
          }
};


@Injectable({
  providedIn: 'root'
})
export class CryptoapiService {

  constructor(private http: HttpClient) { }

  private apiurl = "http://rest-sandbox.coinapi.io/v1/assets";
  private apiXurl = "http://rest-sandbox.coinapi.io/v1/exchangerate";
  private devmode: boolean = true;

  setDevMode(mode: boolean) {
    this.devmode = mode;
    if(this.devmode) {
      this.apiurl = "http://localhost:3000/assets";
      this.apiXurl = "http://localhost:3000"
    }
    else {
      this.apiurl = "http://rest-sandbox.coinapi.io/v1/assets";
      this.apiXurl = "http://rest-sandbox.coinapi.io/v1/exchangerate";
    }
  }

  getCryptos(): Observable<CryptoAsset[]> {
    
    console.log("connecting to: " + this.apiurl);
    return this.http.get<CryptoAsset[]>(this.apiurl, httpOptions);
  }

  getSpecificRate(crypto: string, time?: string): Observable<CryptoRate> {

      let url = `${this.apiXurl}/${crypto}/USD`;
      if(time) {
        url = `${url}?time={${time}}`;
      }
      
      return this.http.get<CryptoRate>(url, httpOptions);

  }

  getTimeSeries(crypto: string): Observable<CryptoTime[]> {

    if (!this.devmode) {
      let today = new Date();
      let weekago = new Date(today.getTime());
      weekago.setDate(today.getDate()-1);
      
      let start: string = `${weekago.getFullYear()}-${0 + weekago.getMonth().toString().slice(-2)}-${0 + weekago.getDay().toString().slice(-2)}T00:00:00`; //2016-01-01T00:00:00
      let end: string = `${today.getFullYear()}-${0 + today.getMonth().toString().slice(-2)}-${0 + today.getDay().toString().slice(-2)}T00:00:00`; //2016-02-01T00:00:00
      
      let url = `${this.apiXurl}/${crypto}/USD/history?period_id=7DAY&time_start=${start}&time_end=${end}`;
      console.log("connecting to: " + url);
      return this.http.get<CryptoTime[]>(url, httpOptions);
    }
    else {
      let url = `${this.apiXurl}/${crypto}/USD/history`;
      console.log("connecting to: " + url);
      return this.http.get<CryptoTime[]>(url, httpOptions);
    }
  }
    
}
