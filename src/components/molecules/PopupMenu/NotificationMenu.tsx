import React from 'react';
import NotificationCard from '../Cards/NotificationCard';
import { ViewPort } from './style.styled';

//TODO: del
const notifications = [
  {
    href: '/notification1',
    imgSrc: 'https://source.unsplash.com/50x50/?portrait&img=50',
    body: 'this is notification',
    time: new Date(),
    isSeen: false,
  },
  {
    href: '/notification2',
    imgSrc: 'https://source.unsplash.com/50x50/?portrait&img=50',
    body: 'this is notification',
    time: new Date(),
    isSeen: false,
  },
  {
    href: '/notification3',
    imgSrc: 'https://source.unsplash.com/50x50/?portrait&img=50',
    body: 'this is notification',
    time: new Date(),
    isSeen: false,
  },
];

export const NotificationMenu = () => {
  return (
    <ViewPort>
      {notifications.map((notification) => {
        return <NotificationCard />;
      })}
    </ViewPort>
  );
};

export default NotificationMenu;
