import { Component } from '@angular/core';

import { IAccount } from './interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public account: IAccount = {
    username: '',
    password: ''
  }
  public passwordType: string = 'password'
  public activeAccessAccount: boolean = false

  constructor() { }

  enablePasswordView(): void {
    this.passwordType === 'password'
      ? this.passwordType = 'text'
      : this.passwordType = 'password'
  }

  enableAccessAccount(value: string, field: string): void {
    if (field === 'username') this.account.username = value
    if (field === 'password') this.account.password = value

    if (this.account.username.trim().length > 2 && this.account.password.trim()) {
      this.activeAccessAccount = true
    } else {
      this.activeAccessAccount = false
    }
  }
}
