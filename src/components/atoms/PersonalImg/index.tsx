import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;

  img {
    border-radius: 50%;
  }

  ::after {
    content: '';

    position: absolute;
    border-radius: 50%;

    height: 20%;
    width: 20%;

    outline: 2px solid white;
    bottom: 10%;
    right: 10%;
    background-color: green;
  }
`;

const PersonalImg: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Wrapper>
      <img src={src} alt="personal img" />
    </Wrapper>
  );
};

export default PersonalImg;
