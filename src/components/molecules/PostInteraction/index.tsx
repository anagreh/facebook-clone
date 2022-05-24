import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { Btn } from "../../atoms/Btn";
import { useContext, useEffect, useState } from "react";
import { userCtx } from "../../../context/userProvider";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.2em;
  padding-block: 0.2em;
  border-block: 1px solid gray;
`;

const likePost = async (postId: string) => {
  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_JWT,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ userPost: postId }),
  };
  const resp = await fetch(
    process.env.REACT_APP_SERVER + `/post_likes`,
    requestInit,
  );
  if (resp.ok === false) throw resp.statusText;
  return resp;
};

const unlikePost = (likeId: string) => {
  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_JWT,
    },
    method: "DELETE",
  };
  return fetch(
    process.env.REACT_APP_SERVER + `/post_likes/${likeId}`,
    requestInit,
  );
};

type Props = {
  post: Post;
  likes: PostLike[];
};

const PostInteraction: React.FC<Props> = ({ post, likes }) => {
  const user = useContext(userCtx);
  const [isLiked, setIsLiked] = useState(false);
  const queryClient = useQueryClient();

  const mutationLikePost = useMutation(likePost, {
    onMutate: () => {
      setIsLiked(true);
    },
    onSuccess: async (data) => {
      const like = await data.json();
      queryClient.setQueriesData(["postLikes", { id: post._id }], (likes) => {
        return [...(likes as []), like];
      });
    },
    onError: () => setIsLiked(false),
  });

  const mutationUnlikePost = useMutation(unlikePost, {
    onMutate: (likeId) => {
      setIsLiked(false);
      // setPostLikes((likes) => likes.filter((like) => like._id !== likeId));
    },
    onSuccess: (resp, likeId) => {
      queryClient.setQueriesData(["postLikes", { id: post._id }], (likes) => {
        let _likes = likes as PostLike[];
        return _likes.filter((like) => like._id !== likeId);
      });
    },
    onError: () => setIsLiked(true),
  });

  useEffect(() => {
    const isUserLiked = likes.some((like) => like.user === user?._id);
    setIsLiked(isUserLiked);
  }, [likes, user?._id]);

  const handleLikePost: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (isLiked) {
      const like = likes.find((like) => like.user === user?._id);
      if (like) mutationUnlikePost.mutate(like._id);
    } else {
      mutationLikePost.mutate(post._id);
    }
  };

  return (
    <Wrapper>
      <Btn type="like" onClick={handleLikePost} isClicked={isLiked} />
      <Btn type="comment" />
      <Btn type="share" />
    </Wrapper>
  );
};

export default PostInteraction;
