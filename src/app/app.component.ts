import { Component } from '@angular/core';
import { Friend } from './friend';

const FRIENDS: Friend[] = [
	{
		name: 'Richard'
	},{
		name: 'José'
	}
]

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css']
})
export class AppComponent {
  title = 'Messagerie Chelou';

  friends = FRIENDS;

  selectedFriend: Friend;

  onSelectedFriend(friend): void{
  	this.selectedFriend = friend;
  	return;
  }
}
