import { Component, Input } from '@angular/core';

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
export class TchatComponent{
	@Input() friend: Friend;

	private messages;
	private user;

	constructor(private messageService: MessageService, accountService: AccountService){
		this.messages = messageService.index();
		this.user = accountService.getUser();
	}

	save(data): void{
		let message = new Message();

		message = message.build({
			content: data,
			timestamp: Date.now()
		});

		this.messageService.save(message);
	}
}