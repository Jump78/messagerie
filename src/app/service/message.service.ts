import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Message } from '../entity/message';


@Injectable()
export class MessageService{
 
	private messages: FirebaseListObservable<any>;
	private db;

	constructor(db: AngularFireDatabase) {
		this.db = db;
		this.messages = db.list('/messages');
	}

	index(){
		return this.messages;
	}

	findAllMessageById(idSender: string){
		console.log(typeof idSender);
		return this.db.list('/messages', {
				    query: {
				    	equalTo: {
				    		key:  'senderId',
				    		value: idSender
				    	}
				    }
			    });
	}	

	findAllMessageByIdSenderAndRecipient(idSender: number,idRecipient: number){
		this.db.list('/messages',{
			equalTo: idSender	
		})
	}

	save(message: Message){
		this.messages.push(message);
	}

	update(key: string, message: Message) {
		this.messages.update(key, message);
	}

	delete(key: string) {    
		this.messages.remove(key); 
	}

	deleteAll() {
		this.messages.remove();
	}
}