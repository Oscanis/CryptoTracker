import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import { User } from '../../interfaces/user-interface';
import { UserService } from '../../services/user.service';
import { CryptoAsset, CryptoRate } from 'src/app/interfaces/crypto-interface';
import { CryptoapiService } from 'src/app/services/cryptoapi.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCryptoComponent } from '../add-crypto/add-crypto.component';

@Component({
  selector: 'app-crypto-container',
  templateUrl: './crypto-container.component.html',
  styleUrls: ['./crypto-container.component.scss']
})
export class CryptoContainerComponent implements OnInit {
  user: User;
  cryptos: CryptoAsset[] = [];
  cryptoNames: string[] = ['BTC'];

  cryptoList = new FormControl();

  constructor(private userService: UserService, private cryptoapiService: CryptoapiService, public addCryptoDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.user = this.userService.loggedInUser;
    this.updateList();
  }

  updateList() {
    this.cryptoapiService.getCryptos().subscribe(cr => this.cryptos = cr);
  }

  addCrypto() {
    const dialogRef = this.addCryptoDialog.open(AddCryptoComponent, { data: {crypto: this.cryptos } });
    dialogRef.afterClosed().subscribe(result => {
      this.user.cryptos.push(result);
      this.userService.updateUser(this.user);
    });
  }

  removeCrypto(crypto: string) {
    console.log("removal");
    const index = this.user.cryptos.indexOf(crypto);
    if (index > -1) {
      this.user.cryptos.splice(index, 1);
      this.userService.updateUser(this.user);
    }
  }
}
