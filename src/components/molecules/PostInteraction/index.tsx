import styled from 'styled-components';

import { Btn } from '../../atoms/Btn';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.2em;
  padding-block: 0.2em;
  border-block: 1px solid gray;
`;

const PostInteraction = () => {
  return (
    <Wrapper>
      <Btn type="like" />
      <Btn type="comment" />
      <Btn type="share" />
    </Wrapper>
  );
};

export default PostInteraction;
