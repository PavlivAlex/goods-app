import React, { useEffect, useMemo } from 'react';

// helpers
import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProps {
  type?: NotificationType;
  title?: string;
  isOpen: boolean;
  duration?: number;
  placement?: NotificationPlacement;
  description: string | JSX.Element;

  closeCallback?: () => void;
}

const Notification = ({
  type = 'info',
  title = '',
  isOpen,
  duration = 3,
  placement = 'bottomRight',
  description,
  closeCallback,
}: NotificationProps) => {
  const [api, contextHolder] = notification.useNotification();

  const notificationConfig = useMemo(
    () => ({ message: title, description, placement, duration }),
    [title, description, placement, duration],
  );

  useEffect(() => {
    if (isOpen) {
      switch (type) {
        case 'success':
          api.success(notificationConfig);
          break;
        case 'error':
          api.error(notificationConfig);
          break;
        case 'warning':
          api.warning(notificationConfig);
          break;
        default:
          api.info(notificationConfig);
          break;
      }
      closeCallback && closeCallback();
    }
  }, [isOpen, closeCallback, api, notificationConfig, type]);

  return contextHolder;
};

export default Notification;
