import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import styled from "styled-components";

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

const PostAnalytic: React.FC<{ likesNum: number; commentsNum: number }> = (
  props,
) => {
  return (
    <Wrapper>
      <SpanStyled>
        <FaThumbsUp />
        <p>{props.likesNum} likes</p>
      </SpanStyled>
      <SpanStyled>
        <p>{props.commentsNum} comments</p>
      </SpanStyled>
    </Wrapper>
  );
};

export default PostAnalytic;
