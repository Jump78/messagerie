import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnectionComponent }   from '../component/connection.component';
import { FriendlistCommponent }   from '../component/friendlist.component';

import { Guard }   from '../guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: ConnectionComponent },
  { path: 'tchat',  component: FriendlistCommponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [Guard]
})
export class AppRoutingModule {}