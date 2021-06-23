import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-crypto',
  templateUrl: './add-crypto.component.html',
  styleUrls: ['./add-crypto.component.scss']
})
export class AddCryptoComponent implements OnInit {
  crypto: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}
