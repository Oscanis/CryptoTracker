import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  cryptoWebSocket: WebSocketSubject<any> = webSocket('ws://ws-sandbox.coinapi.io/v1/');

    
  constructor() { }

  connect(filter: string) {

    const symbol_cache = "COINBASE_SPOT_"+filter+"_USD$";

    const hello = {
      type: "hello",
      apikey: "40496D5E-4024-4CC6-9F94-35B7A8B17077",
      heartbeat: false,
      subscribe_data_type: ["quote"],
      //subscribe_filter_asset_id: filter,
      subscribe_filter_symbol_id: symbol_cache
      }



    this.cryptoWebSocket.next(hello);
  }
  
}
