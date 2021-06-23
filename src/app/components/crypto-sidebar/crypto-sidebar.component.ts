import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-crypto-sidebar',
  templateUrl: './crypto-sidebar.component.html',
  styleUrls: ['./crypto-sidebar.component.scss']
})
export class CryptoSidebarComponent implements OnInit {

  socketFeed: any;

  constructor(private socket: WebsocketService) { }

  ngOnInit(): void {
    //Websocket connection is turned off: could not be implemented properly
    /* this.socket.connect('ETH');
    this.socket.cryptoWebSocket.asObservable().subscribe(
      msg => this.onMsg(msg),
      err => console.log(err), 
      () => console.log('complete') 
    ); */
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
