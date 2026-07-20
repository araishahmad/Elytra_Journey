import notification from './notification';

class pushNotification extends notification {
    constructor(sender: string, message: string) {
        super(sender, message);
    }

    send(): void {
        console.log(`Push notification: ${this.message}`);
    }
}

export default pushNotification;