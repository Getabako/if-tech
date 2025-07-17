import React from 'react';

interface NotificationAreaProps {
  notifications: string[];
}

const NotificationArea: React.FC<NotificationAreaProps> = ({ notifications }) => {
  return (
    <div id="notificationArea">
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
    </div>
  );
};

export default NotificationArea;