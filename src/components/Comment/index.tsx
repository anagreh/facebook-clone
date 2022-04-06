import React from 'react';

import styled from 'styled-components';
import { CommentOptionBtn } from '../atoms/Btn';
import PersonalImg from '../atoms/PersonalImg';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ImgWrapper = styled.div`
  height: 2.5em;
  width: 2.5em;

  flex-shrink: 0;
`;

export const Body = styled.div`
  flex-grow: 1;

  padding-inline: 0.5em;
`;

export const CommentBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1em;
`;

export const CommentSpan = styled.span`
  flex-grow: 1;

  padding-block: 0.5em;
  padding-inline: 0.5em;
  border-radius: 1em;

  background-color: ${({ theme }) => theme.color.bg.primary};
`;

export const InterAction = styled.div`
  color: ${({ theme }) => theme.color.font.secondary};

  button {
    border: none;
    background-color: transparent;

    padding: 0;
    padding-inline: 0.5em;

    color: inherit;

    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  p {
    display: inline-block;
    font-size: 0.75em;
    padding-inline: 0.5em;
  }
`;

const Comment = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <PersonalImg src="https://source.unsplash.com/50x50/?portrait&img=8" />
      </ImgWrapper>
      <Body>
        <CommentBody>
          <CommentSpan>
            <p>
              <b>Emam</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quaerat eaque est aperiam consectetur.
            </p>
          </CommentSpan>
          <CommentOptionBtn />
        </CommentBody>
        <InterAction>
          <button>like</button>
          <button>reply</button>
          <p>6h</p>
        </InterAction>
      </Body>
    </Wrapper>
  );
};

export default Comment;
