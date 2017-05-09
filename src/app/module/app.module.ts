import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

import { AppComponent } from '../component/app.component';
import { TchatComponent } from '../component/tchat.component'
import { FriendlistCommponent } from '../component/friendlist.component'
import { ConnectionComponent } from '../component/connection.component'

import { MessageService } from '../service/message.service'
import { AccountService } from '../service/account.service'

@NgModule({
  declarations: [
    AppComponent,
    TchatComponent,
    ConnectionComponent,
    FriendlistCommponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppRoutingModule
  ],
  providers: [
    MessageService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
