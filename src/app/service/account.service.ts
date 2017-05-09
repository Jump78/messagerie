import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AccountService {

  private user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  async signUp(email,password){
    let response;

    await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(()=>{
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
      .then(()=>{
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
}