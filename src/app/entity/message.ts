import { toCapitalize } from '../utils';

export class Message {
	id: number;
	senderId: number;
	recipientId: number;
	content: string;
	timestamp: number;

	public build(data): Message{
		for (let i in data) {
			if (this['set'+toCapitalize(i)]) {
				this['set'+toCapitalize(i)](data[i]);
			}
		}
		return this;
	}

	public setId(id: number): Message{
		this.id = id;

		return this;
	}

	public setSenderId(id: number): Message{
		this.senderId = id;

		return this;
	}

	public setRecipientId(id: number): Message{
		this.recipientId = id;

		return this;
	}

	public setContent(content: string): Message{
		this.content = content;

		return this;
	}

	public setTimestamp(timestamp: number): Message{
		this.timestamp = timestamp;

		return this;
	}
}