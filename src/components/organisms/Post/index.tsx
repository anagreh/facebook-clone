import PostAnalytic from "../../atoms/PostAnalytic";
import PostHeader from "../../atoms/PostHeader";
import PostCommentForm from "../../molecules/PostCommentForm";
import PostInteraction from "../../molecules/PostInteraction";
import Comment from "../../molecules/Comment";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  padding: 1em;

  background-color: white;
  border: 1px solid rgba(100, 100, 100, 0.2);

  border-radius: 1em;
`;

//

function PostComments() {
  return (
    <>
      <Comment />
      <Comment />
    </>
  );
}

const post = {
  id: "post-1",
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
  deserunt molestias, dolore vitae ipsa cum aliquam nam, sint minima
  modi ullam laborum assumenda aliquid eum tempora consequuntur
  architecto facilis quidem.`,
  imgSrc: "https://source.unsplash.com/800x500/?portrait&img=",
};

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Wrapper>
      <PostHeader />
      <div>
        <p>{post.content}</p>
        {post.imgSrc && (
          <div>
            <img src={post.imgSrc} alt="postImg" />
          </div>
        )}
      </div>
      <PostAnalytic />
      <PostInteraction />
      <PostCommentForm />
      <PostComments />
    </Wrapper>
  );
};

export default Post;
