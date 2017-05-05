import { Component, Input } from '@angular/core';

import { Friend } from './friend';

@Component({
	selector: 'private-msg',
	templateUrl: '../templates/privateMessage.component.html',
	styles: [`
		.message{
			float: left;
			padding: 0% 2%;
		}
	`]
})

export class PrivateMessage{
	@Input() friend: Friend;
}