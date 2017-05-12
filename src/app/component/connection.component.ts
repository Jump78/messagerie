import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../service/account.service';

@Component({
  selector: 'co',
  templateUrl: '../../templates/login.component.html',
})
export class ConnectionComponent {

  user;
  msg: string;
  accountService: AccountService;
  router: Router;

  constructor(accountService: AccountService, router: Router) {
    this.accountService = accountService;
    this.router = router;
  }

  async signUp(email: string, password: string){
    let result = await this.accountService.signUp(email, password);

    if (!result.error) {
      this.router.navigate(['tchat']);
    }else{
      this.msg = result.message;
    }
  }

  async login(email: string, password: string) {
    let result = await this.accountService.login(email, password);
    if (!result.error) {
      this.router.navigate(['tchat']);
    }else{
      this.msg = result.message;
    }
  }

  logout() {
    this.accountService.logout();
  }
}