import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CryptoapiService } from 'src/app/services/cryptoapi.service';
import { CryptoRate } from 'src/app/interfaces/crypto-interface';


@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.scss']
})
export class CryptoDashboardComponent implements OnInit {

  @Input() cryptoId = '';
  crypto: CryptoRate;
  cryptoRate: number;
  @Output() deleteEvent = new EventEmitter<string>();

  calcFormControl = new FormControl();
  calcCrypto: number = 1;
  calcUsd: number = 1;
  cryptoToUsd: boolean = true;

  constructor(private cryptoapiService: CryptoapiService) { }

  ngOnInit(): void {
    this.cryptoapiService.getSpecificRate(this.cryptoId).subscribe(cr => {
      
      //server gives back object, fake api gives back object array...
      if(cr[0]) {
        this.crypto = cr[0];
      }
      else {
        this.crypto = cr;
      }
      
      this.cryptoRate = this.crypto.rate;
      console.log(this.crypto, this.crypto.rate);
      this.calcUsd = this.calcCrypto * this.cryptoRate;
    });
  }

  switchCalc () {
    if (this.cryptoToUsd){
      this.calcUsd = this.calcCrypto * this.cryptoRate;
    } else this.calcCrypto = this.calcUsd / this.cryptoRate;
    this.cryptoToUsd = !this.cryptoToUsd;
  }

  removeCryptoEvent() {
    if(confirm("Do you really want to remove this Crypto currency?")){
      this.deleteEvent.emit(this.cryptoId);
    }
  }
}
