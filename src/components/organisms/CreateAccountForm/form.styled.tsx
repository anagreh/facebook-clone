import styled from "styled-components";

export const Wrapper = styled.section`
  /* background-color: white; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0.6em; */

  overflow: hidden;
`;

export const HeaderStyle = styled.header`
  padding: 1em;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1em;
  gap: 1em;
`;

export const InputStyled = styled.input<{ error?: boolean }>`
  flex: 1 0 auto;
  height: 3em;
  border: 1px solid ${(props) => (props.error ? "#f00" : "#aaa")};
  border-radius: 0.2em;

  &:focus,
  &:focus-visible {
    outline: inherit;
  }
`;

export const RadioInputSecWrapper = styled.div``;

export const RadioInputsWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

export const RadioInputWrapper = styled.div<{ error?: boolean }>`
  display: flex;
  height: 3em;
  border: 1px solid ${(props) => (props.error ? "red" : "#aaa")};
  border-radius: 0.2em;
  flex: 1 0 auto;
  padding-inline: 0.5em;

  label {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
  }
  input {
    margin: 0;
    /* vertical-align: middle; */
  }
`;

export const BtnStyled = styled.button`
  /* height: 1em; */

  font-size: 1em;
  margin: 0;
  padding-inline: 4em;
  padding-block: 0.5em;

  align-self: center;

  border: none;
  border-radius: 0.2em;

  background-color: ${({ theme }) => "green"};
  color: white;

  font-family: "Helvetica Neue", Arial, sans-serif;

  cursor: pointer;
`;

export const LabelStyled = styled.label`
  display: inline-block;
  height: 3em;

  border: 1px solid #aaa;
  border-radius: 0.2em;
`;

export const NameWrapper = styled.span`
  display: flex;
  gap: 1em;
`;
