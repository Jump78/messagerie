import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountService } from './service/account.service';

@Injectable()
export class Guard implements CanActivate {

  constructor(private authService: AccountService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }
}