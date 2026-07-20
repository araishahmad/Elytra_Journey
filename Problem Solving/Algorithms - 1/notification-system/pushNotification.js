import notification from './notification';
class pushNotification extends notification {
    constructor(sender, message) {
        super(sender, message);
    }
    send() {
        console.log(`Push notification: ${this.message}`);
    }
}
export default pushNotification;
