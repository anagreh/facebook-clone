import { useContext, useState } from "react";
import styled from "styled-components";
import { userCtx } from "../../../context/userProvider";
import { CreatePostForm } from "./index";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.bg.default};
  display: flex;
  gap: 0.5em;
  padding: 1em;

  border-radius: 1em;
`;

export const ImgWrapper = styled.div`
  border-radius: 50%;
  height: 3em;
  width: 3em;

  flex-shrink: 0;

  overflow: hidden;
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.bg.primary};

  border-radius: 3.5em;
  flex-grow: 1;
  cursor: pointer;

  color: ${({ theme }) => theme.color.font.secondary};
  padding-inline: 1em;
  text-align: start;
`;
const CreatePostBtn = () => {
  const user = useContext(userCtx);
  
  const [showForm, setShowForm] = useState(false);

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={user?.personal_img} alt="personal img" />
      </ImgWrapper>
      <ButtonStyled onClick={() => setShowForm(true)}>
        What's in your mind
      </ButtonStyled>
      {showForm && <CreatePostForm setShowForm={setShowForm} />}
    </Wrapper>
  );
};
export default CreatePostBtn;
