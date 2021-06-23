import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];
  loggedInUser: User;
  devMode: boolean = true;

  constructor() {  }


  loginUser(user) {
    this.loggedInUser = user;
  }

  logoutUser() {
    this.loggedInUser = null;
  }

  private initUserDB() {
      
    const adminUser: User = {
      id: 0,
      name: 'Admin',
      password: '123',
      cryptos: ['BTC']
    }
      
      this.addUser(adminUser);
  }

  private loadUsers() {
    if (!localStorage.getItem('users')) {
      this.initUserDB();
    }
    this.userList = JSON.parse(localStorage.getItem('users'));
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.userList));
  }

  updateUser(user: User) {
    const i = this.userList.findIndex(u => u.id === user.id);
    this.userList[i].cryptos = user.cryptos;
    this.saveUsers();
  }

  listUsers() {
    this.loadUsers();
    return this.userList;
  }

  findUserName(userName: string) {
    this.loadUsers();
    return this.userList.find(user => user.name === userName);
  }

  addUser(user: User) {
    user.id = this.userList.length + 1;
    this.userList.push(user);
    this.saveUsers();
  }

  clearStorage() {
    localStorage.removeItem('users');
  }
}
