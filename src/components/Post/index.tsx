import PostAnalytic from '../atoms/PostAnalytic';
import PostHeader from '../atoms/PostHeader';
import PostCommentForm from '../molecules/PostCommentForm';
import PostInteraction from '../molecules/PostInteraction';
import Comment from '../Comment';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  width: 50em;

  padding: 1em;

  background-color: white;
  border: 1px solid gray;
`;

const Post = () => {
  return (
    <Wrapper>
      <PostHeader />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          deserunt molestias, dolore vitae ipsa cum aliquam nam, sint minima
          modi ullam laborum assumenda aliquid eum tempora consequuntur
          architecto facilis quidem.
        </p>
      </div>
      <PostAnalytic />
      <PostInteraction />
      <PostCommentForm />
      <Comment />
      <Comment />
      <Comment />
    </Wrapper>
  );
};

export default Post;
