import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'co',
  templateUrl: '../../templates/login.component.html',
})
export class ConnectionComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signUp(email,password){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  login(email,password) {
    this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}