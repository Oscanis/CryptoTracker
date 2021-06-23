import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

const dummy = [
  {name: "BTC", high: 49649.7153, low: 47148.0422},
  {name: "ETH", high: 5931.6534, low: 5627.6534},
  {name: "DOGE", high: 0.2926, low: 0.2527}
];

@Component({
  selector: 'app-crypto-sidebar',
  templateUrl: './crypto-sidebar.component.html',
  styleUrls: ['./crypto-sidebar.component.scss']
})
export class CryptoSidebarComponent implements OnInit {

  dummyData: any[];

  socketFeed: any;

  constructor(private socket: WebsocketService) { }

  ngOnInit(): void {
    //Websocket connection works but filtering & presentation is not implemented due to insufficient time
    /* this.socket.connect('ETH');
    this.socket.cryptoWebSocket.asObservable().subscribe(
      msg => this.onMsg(msg),
      err => console.log(err), 
      () => console.log('complete') 
    ); */
    this.dummyData = dummy;
    
    window.setInterval(() => {
      this.updateDummy();
    }, 5000);
  }

  updateDummy () {
    this.dummyData.forEach(data => {
      data.high = data.high * (Math.random()/100 + 1);
      data.low = data.low * (Math.random()/100 + 1);
    });
  }

  onMsg(msg) {
    this.socketFeed = msg;
    console.log(this.socketFeed);
    this.closeSocket();
  }

  closeSocket () {
    this.socket.cryptoWebSocket.unsubscribe();
  }

}
