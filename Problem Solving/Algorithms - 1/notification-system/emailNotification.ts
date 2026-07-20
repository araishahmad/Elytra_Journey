import notification from './notification';

class emailNotification extends notification {
    constructor(sender: string, message: string, private emailAddress: string) {
        super(sender, message);
    }

    send(): void {
        console.log(`Email to ${this.emailAddress}: ${this.message}`);
    }
}

export default emailNotification;