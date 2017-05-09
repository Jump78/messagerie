import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnectionComponent }   from '../component/connection.component';
import { TchatComponent }   from '../component/tchat.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: ConnectionComponent },
  { path: 'tchat',  component: TchatComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}