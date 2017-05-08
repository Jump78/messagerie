import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Message } from '../entity/message';


@Injectable()
export class MessageService{
 
	private messages: FirebaseListObservable<any>;

	constructor(db: AngularFireDatabase) {
		this.messages = db.list('/messages');
	}

	index(){
		return this.messages;
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