import { Component, Input } from '@angular/core';

import { Friend } from '../entity/friend';

const FRIENDS: Friend[] = [
	{
		name: 'Richard',
		id: 1
	},{
		name: 'José',
		id: 2
	}
]

@Component({
	selector: 'friendlist',
	templateUrl: '../../templates/friendlist.component.html',
	styles: [`
		.selected{
			color: red;
		}
		.left{
			float:left;
		}
		.clearBoth{
			clear: both;
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