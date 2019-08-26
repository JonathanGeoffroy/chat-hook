import uuidv1 from 'uuid/v1';

export class ChatService {
    subscribed = {};
    messageNumber = 0;

    subscribe(room, handler) {
        console.log('subscribe', room);

        this.subscribed[room] = setInterval(() => {
            handler({
                id: uuidv1(),
                text: `[${room}] Message n°${this.messageNumber}`
            });

            this.messageNumber++;
        }, 1000);
    }

    unsubscribe(room) {
        console.log('unsubscribe', room);

        clearInterval(this.subscribed[room]);
    }
}
