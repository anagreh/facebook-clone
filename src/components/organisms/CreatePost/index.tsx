import { useState } from 'react';
import { FaXbox } from 'react-icons/fa';
import styled, { css } from 'styled-components';

export const SectionWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(100, 100, 100, 0.5);

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 2000;
`;

export const SectionStyled = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.bg.default};
  min-width: 25em;

  border-radius: 0.5em;
`;

export const CloseSectionBtn = styled.button`
  background-color: transparent;
  font-size: 1.25em;
  border: none;
  position: absolute;

  top: 0.5em;
  right: 0.5em;

  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
`;

export const HeadingStyled = styled.div`
  text-align: center;

  h1 {
    font-size: 1.3em;
    line-height: 2.5em;
  }

  hr {
    border: none;
    border-top: 1px solid gray;
    margin: 0;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const PostBtn = styled.input<{ disabled?: boolean }>`
  background-color: ${({ theme }) => theme.color.logo.Blue};
  color: white;

  width: 100%;
  height: 2.5em;

  border: none;
  border-radius: 0.4em;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.color.bg.primary};
      color: gray;

      cursor: no-drop;
    `}
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: 8em;

  border: none;
  resize: none;

  :focus {
    outline: none;
  }
`;

export const SelectStyled = styled.select`
  font-size: 0.8em;

  border: none;
  border-radius: 0.3em;
  /* background-color: red; */
`;

export const CreatePostForm: React.FC<{
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowForm }) => {
  const [formValue, setFormValue] = useState('');
  const [inputHasValue, setInputHasValue] = useState(false);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
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
              <img
                src="https://source.unsplash.com/50x50/?portrait&img=10"
                alt="personal img"
              />
            </ImgWrapper>
            <div>
              <p>name</p>
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
          <PostBtn type="submit" value="Post" disabled={formValue === ''} />
        </FormStyled>
      </SectionStyled>
    </SectionWrapper>
  );
};

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
  const [showForm, setShowForm] = useState(false);

  return (
    <Wrapper>
      <ImgWrapper>
        <img
          src="https://source.unsplash.com/50x50/?portrait&img=9"
          alt="personal img"
        />
      </ImgWrapper>
      <ButtonStyled onClick={() => setShowForm(true)}>
        What's in your mind
      </ButtonStyled>
      {showForm && <CreatePostForm setShowForm={setShowForm} />}
    </Wrapper>
  );
};

export default CreatePostBtn;
