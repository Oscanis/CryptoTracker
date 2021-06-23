import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';
import { CryptoapiService } from 'src/app/services/cryptoapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //properties
  userFormControl = new FormControl('', [Validators.required]);
  passFormControl = new FormControl('', [Validators.required]);
  user: User;
  incorrectLogin: string = "";
  devMode: boolean = true;

  //functions
  constructor(private router: Router, private userService: UserService, private cryptoApiService: CryptoapiService) {
   }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.userFormControl.value && this.passFormControl.value) {
      
      if(this.userService.findUserName(this.userFormControl.value)) {
        const logged: User = this.userService.findUserName(this.userFormControl.value);
        if(logged.password === this.passFormControl.value) {
          this.incorrectLogin = "";
          console.log("You're now logged in, " + logged.name);
          this.userService.loginUser(logged);
          this.userService.devMode = this.devMode;
          this.cryptoApiService.setDevMode(this.devMode);
          this.router.navigateByUrl('/cryptos');
        } else this.incorrectLogin = "Wrong password!";
      }
      else {
        if(confirm("No such user found. Would you like to create it?")){
          const newUser: User = {
            id: 0,
            name: this.userFormControl.value,
            password: this.passFormControl.value,
            cryptos: []
          }
          
          this.userService.addUser(newUser);
          this.userService.loginUser(newUser);
          console.log("User " + newUser.name + " created.");
          this.router.navigateByUrl('/cryptos');
        }
      }
    }
  }
}