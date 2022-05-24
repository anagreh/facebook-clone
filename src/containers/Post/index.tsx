import PostAnalytic from "../../components/atoms/PostAnalytic";
import PostHeader from "../../components/atoms/PostHeader";
import PostCommentForm from "../../components/molecules/PostCommentForm";
import PostInteraction from "../../components/molecules/PostInteraction";
import Comment from "../../components/molecules/Comment";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchComments, fetchLikes } from "./fetchApi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  padding: 1em;

  background-color: white;
  border: 1px solid rgba(100, 100, 100, 0.2);

  border-radius: 1em;
`;

const Post: React.FC<{ post: Post }> = ({ post }) => {
  const [analytic, setAnalytic] = useState({ likesNum: 0, commentsNum: 0 });

  const { data: postComment } = useQuery<PostComment[]>(
    ["postComments", { id: post._id }],
    () => fetchComments(post),
    { initialData: [] },
  );

  const { data: postLikes } = useQuery<PostLike[]>(
    ["postLikes", { id: post._id }],
    () => fetchLikes(post),
    { initialData: [] },
  );

  useEffect(() => {
    if (postComment)
      setAnalytic((state) => ({ ...state, commentsNum: postComment.length }));
  }, [postComment]);

  useEffect(() => {
    if (postLikes)
      setAnalytic((state) => ({ ...state, likesNum: postLikes.length }));
  }, [postLikes]);

  return (
    <Wrapper>
      <PostHeader post={post} />
      <div>
        <p>{post.content}</p>
        {post.imgSrc && (
          <div>
            <img src={post.imgSrc} alt="postImg" />
          </div>
        )}
      </div>
      <PostAnalytic
        commentsNum={analytic.commentsNum}
        likesNum={analytic.likesNum}
      />
      <PostInteraction post={post} likes={postLikes || []} />
      <PostCommentForm post={post} />
      {postComment?.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
    </Wrapper>
  );
};

export default Post;
