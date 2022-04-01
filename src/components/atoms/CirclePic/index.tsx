import React from 'react';
import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 2.5em;
  width: 2.5em;

  border-radius: 50%;

  overflow: hidden;
`;

const CirclePic = () => {
  return (
    <Wrapper>
      <img src="https://source.unsplash.com/50x50" alt="search"></img>
    </Wrapper>
  );
};

export default CirclePic;
