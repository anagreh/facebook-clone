import { useContext, useState } from "react";
import { FaXbox } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { userCtx } from "../../../context/userProvider";
import { ImgWrapper } from "./CreatePostBtn";
import {
  SectionWrapper,
  SectionStyled,
  CloseSectionBtn,
  HeadingStyled,
  FormStyled,
  PostHeader,
  SelectStyled,
  TextareaStyled,
  PostBtn,
} from "./CreatePostForm.styled";

const postPost = async (content: string) => {
  const requestInit: RequestInit = {
    headers: {
      // localStorage.getItem("jwtToken")
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    method: "POST",
    body: JSON.stringify({ content }),
  };

  const resp = await fetch(process.env.REACT_APP_SERVER + `/posts`, requestInit);

  if (resp.ok === false) throw resp.statusText;
  return resp.json();
};

export const CreatePostForm: React.FC<{
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowForm }) => {
  const user = useContext(userCtx);

  const [formValue, setFormValue] = useState("");
  const [inputHasValue, setInputHasValue] = useState(false);

  const queryClient = useQueryClient();
  const mutatePost = useMutation(postPost, {
    onSuccess: (data) => {
      const post = data as Post;
      post.user = user || post.user;

      setShowForm(false);
      setFormValue("");
      queryClient.setQueryData<Post[]>("posts", (oldPosts) => {
        if (oldPosts === undefined) return [post];
        return [post, ...oldPosts];
      });
    },
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutatePost.mutate(formValue);
  };

  if (user === null) return <p>no user</p>;
  return (
    <SectionWrapper>
      <SectionStyled>
        <CloseSectionBtn onClick={() => setShowForm(false)}>
          <FaXbox />
        </CloseSectionBtn>

        <HeadingStyled>
          <h1>Create Post</h1>
          <hr />
        </HeadingStyled>

        <FormStyled onSubmit={submitHandler}>
          <PostHeader>
            <ImgWrapper>
              <img src={user?.personal_img} alt="personal img" />
            </ImgWrapper>
            <div>
              <p>{user?.first_name + " " + user?.last_name}</p>
              <SelectStyled name="acceptability">
                <option value="Public" defaultChecked>
                  🌏 public
                </option>
              </SelectStyled>
            </div>
          </PostHeader>

          <TextareaStyled
            name="body"
            id="body"
            placeholder="What's on your mind"
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
          ></TextareaStyled>

          <PostBtn type="submit" value="Post" disabled={formValue === "" || mutatePost.isLoading} />
        </FormStyled>
      </SectionStyled>
    </SectionWrapper>
  );
};
