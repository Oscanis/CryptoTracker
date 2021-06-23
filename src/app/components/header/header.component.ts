import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user-interface';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: Router;

  constructor(router: Router, private userService: UserService) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.userService.logoutUser();
    console.log("Logged out " + this.userService.loggedInUser.name);
  }

}
