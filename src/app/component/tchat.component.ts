import { Component, Input, OnChanges } from '@angular/core';

import { Friend } from '../entity/friend';
import { Message } from '../entity/message';

import { AccountService } from '../service/account.service'
import { MessageService } from '../service/message.service'

@Component({
	selector: 'tchat',
	templateUrl: '../../templates/tchat.component.html',
	styles: [`
		.message{
			float: left;
			padding: 0% 2%;
		}
	`]
})
export class TchatComponent implements OnChanges{
	@Input() friend: Friend;

	private messages;
	private user;

	constructor(private messageService: MessageService, accountService: AccountService){
		this.user = accountService.getUser();
	}

	save(data): void{
		let message = new Message();
		message = message.build({
			content: data,
			timestamp: Date.now(),
			senderId: this.user.uid,
			recipientId: this.friend.id
		});

		this.messageService.save(message);
	}

	ngOnChanges(){
		console.log(typeof this.user.uid);
		this.messages = this.messageService.findAllMessageById(this.user.uid);
	}
}