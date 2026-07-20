import notification from './notification';
import smsNotification from './smsNotification';
import emailNotification from './emailNotification';
import pushNotification from './pushNotification';

const notifications: notification[] = [
    new smsNotification("System", "Hello Ahmed", "+92300"),
    new emailNotification("System", "Hello Ahmed", "ali@mail.com"),
    new pushNotification("System", "Hello Ahmed"),
];

notifications.forEach((n) => n.send());