import notification from './notification';
class emailNotification extends notification {
    emailAddress;
    constructor(sender, message, emailAddress) {
        super(sender, message);
        this.emailAddress = emailAddress;
    }
    send() {
        console.log(`Email to ${this.emailAddress}: ${this.message}`);
    }
}
export default emailNotification;
