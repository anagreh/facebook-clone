import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './Shared.styled';

const ImgWrapper = styled.div`
  flex-shrink: 0;

  height: 3.5em;
  width: 3.5em;
`;

const ImgStyled = styled.img`
  border-radius: 50%;
`;

const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 0.9em;
  height: 90%;

  padding-inline: 1em;

  p {
    padding: 0;
  }

  p:first-child {
    height: 3em;
    overflow: hidden;
  }

  p:last-child {
    font-size: 0.6em;
    color: blue;
  }
`;

const IsSeenIndicator = styled.div`
  position: absolute;
  background-color: blue;
  border-radius: 50%;

  height: 1em;
  width: 1em;

  right: 1em;
`;

//TODO: del
const notification = {
  href: '/notification',
  imgSrc: 'https://source.unsplash.com/50x50/?portrait&img=50',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error, sa elit. Aliquam error, sa elit. Aliquam error, sa',
  time: new Date(),
  isSeen: false,
};

const NotificationCard = () => {
  // href, picUrl, body, time, isSeen
  return (
    <Wrapper height="4em" href={notification.href}>
      <ImgWrapper>
        <ImgStyled src={notification.imgSrc} />
      </ImgWrapper>

      <BodyStyled>
        <p>{notification.body}</p>
        <p>{notification.time.toISOString()}</p>
      </BodyStyled>

      {notification.isSeen || <IsSeenIndicator />}
    </Wrapper>
  );
};

export default NotificationCard;
