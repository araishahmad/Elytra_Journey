import useAppStore from './useAppStore';

function NotificationList() {
  const notifications = useAppStore((state) => state.notifications);
  const removeNotification = useAppStore((state) => state.removeNotification);

  return (
    <ul className="notification-list">
      {notifications.map((n) => (
        <li key={n.id}>
          {n.message}
          <button onClick={() => removeNotification(n.id)}>Dismiss</button>
        </li>
      ))}
    </ul>
  );
}

export default NotificationList;