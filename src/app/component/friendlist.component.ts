import { Component, Input } from '@angular/core';

import { Friend } from '../entity/friend';

const FRIENDS: Friend[] = [
	{
		name: 'Richard'
	},{
		name: 'José'
	}
]

@Component({
	selector: 'friendlist',
	templateUrl: '../../templates/friendlist.component.html',
	styles: [`
		.message{
			float: left;
			padding: 0% 2%;
		}
	`]
})

export class FriendlistCommponent {
  friends:Friend[] = FRIENDS;

  selectedFriend: Friend;

  onSelectedFriend(friend: Friend): void{
  	this.selectedFriend = friend;
  	return;
  }
}