import notification from './notification';

class smsNotification extends notification {
    constructor(sender: string, message: string, private phoneNumber: string) {
        super(sender, message);
    }

    send(): void {
        console.log(`SMS to ${this.phoneNumber}: ${this.message}`);
    }
}

export default smsNotification;