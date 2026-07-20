import notification from './notification';
class smsNotification extends notification {
    phoneNumber;
    constructor(sender, message, phoneNumber) {
        super(sender, message);
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`SMS to ${this.phoneNumber}: ${this.message}`);
    }
}
export default smsNotification;
