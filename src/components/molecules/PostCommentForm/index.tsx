import PersonalImg from "../../atoms/PersonalImg";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { userCtx } from "../../../context/userProvider";

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const InputStyled = styled.input`
  width: 100%;

  padding-inline: 0.75em;
  padding-block: 0.5em;
  border: none;
  border-radius: 2em;
  background-color: ${({ theme }) => theme.color.bg.primary};

  &:focus {
    outline: none;
  }
`;

export const ImgWrapper = styled.div`
  width: 2.5em;
  height: 2.5em;
  flex-shrink: 0;
`;

const postComment = async (data: { userPost: string; commentContent: string }) => {
  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    method: "POST",
    body: JSON.stringify(data),
  };

  const commentsResp = await fetch(process.env.REACT_APP_SERVER + `/post_comments`, requestInit);

  if (commentsResp.ok === false) throw commentsResp.statusText;
  return commentsResp.json();
};

const PostCommentForm: React.FC<{ post: Post }> = ({ post }) => {
  const user = useContext(userCtx);

  const [commentContent, setCommentContent] = useState("");

  const queryClient = useQueryClient();
  const mutateComment = useMutation(postComment, {
    onSuccess: (data) => {
      data.user = user;

      setCommentContent("");
      queryClient.setQueryData(["postComments", { id: post._id }], (comments) => {
        return [data, ...(comments as PostComment[])];
      });
    },
    onError: (errors: Array<any>) => {
      return console.error(errors.find((err) => err.property === "commentContent"));
    },
  });

  const handleCommentSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (commentContent === "") return;

    const data = {
      userPost: post._id,
      commentContent: commentContent,
    };

    mutateComment.mutate(data);
  };

  return (
    <FormWrapper onSubmit={handleCommentSubmit}>
      <ImgWrapper>
        <PersonalImg src={user?.personal_img || ""} />
      </ImgWrapper>
      <InputStyled
        placeholder="Write a comment..."
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        disabled={mutateComment.isLoading}
      ></InputStyled>
    </FormWrapper>
  );
};

export default PostCommentForm;
