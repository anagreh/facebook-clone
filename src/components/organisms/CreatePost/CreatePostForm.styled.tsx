import styled, { css } from "styled-components";

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
