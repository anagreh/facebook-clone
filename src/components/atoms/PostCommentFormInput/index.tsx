import styled from 'styled-components';

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

const PostCommentFormInput: React.FC<React.HTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  return (
    <InputStyled placeholder="Write a comment..." {...props}></InputStyled>
  );
};

export default PostCommentFormInput;
