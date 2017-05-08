import { Component, Input } from '@angular/core';

import { Friend } from '../entity/friend';
import { Message } from '../entity/message';

import { MessageService } from '../service/message.service'


@Component({
	selector: 'private-msg',
	templateUrl: '../../templates/privateMessage.component.html',
	styles: [`
		.message{
			float: left;
			padding: 0% 2%;
		}
	`]
})

export class PrivateMessageComponent{
	@Input() friend: Friend;

	private messages;

	constructor(private messageService: MessageService){
		this.messages = messageService.index();
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