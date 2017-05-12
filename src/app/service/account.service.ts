import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AccountService {

  private user;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  async signUp(email,password){
    let response;

    await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((r)=>{
        this.user = r;
        response = {
          error : false,
          message : 'Succesfull sign up'
        };
      })
      .catch((e)=>{
        response = {
          error : true,
          message : e.message
        };
      });

    return response;
  }

  async login(email,password) {
    let response;

    await this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then((r)=>{
        this.user = r;
        console.log(r);
        response = {
          error : false,
          message : 'Succesfull login'
        };
      })
      .catch((e)=>{
        response = {
          error : true,
          message : e.message
        };
      });

    return response;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUser(){
    return this.user;
  }

  isLoggedIn(){
    if (this.user.uid) {
       return true;
    }

    return false;
  }
}