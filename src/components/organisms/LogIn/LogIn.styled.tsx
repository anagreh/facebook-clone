import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  flex-shrink: 0;
  padding: 1em;

  min-width: 12em;
`;

export const FromStyled = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1em;
`;

export const InputStyled = styled.input`
  height: 3em;
  border: 1px solid #aaa;

  border-radius: 0.2em;

  padding-inline: 1em;
  padding-bottom: 4px;
`;

export const BtnStyled = styled.button`
  /* height: 1em; */

  font-size: 1.4em;
  color: white;

  border: none;

  border-radius: 0.2em;
  padding-inline: 1em;
  padding-block: 0.4em;
  font-family: "Helvetica Neue", Arial, sans-serif;

  cursor: pointer;
`;

export const LogInBtn = styled(BtnStyled)`
  background-color: ${({ theme }) => theme.color.logo.Blue};
`;

export const CreateAccountBtn = styled(BtnStyled)`
  background-color: ${({ theme }) => "green"};

  margin: 0;
  align-self: center;
`;

export const LinkStyled = styled(Link)`
  margin: auto;
  text-decoration: none;
`;
