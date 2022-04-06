import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.color.font.secondary};
`;

export const SpanStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4em;

  svg {
    color: ${({ theme }) => theme.color.logo.Blue};
  }
`;

const PostAnalytic = () => {
  return (
    <Wrapper>
      <SpanStyled>
        <FaThumbsUp />
        <p>1.3k likes</p>
      </SpanStyled>
      <SpanStyled>
        <p>81 comments</p>
      </SpanStyled>
    </Wrapper>
  );
};

export default PostAnalytic;
