import React from "react";
import styled from "styled-components";

export const BtnStyled = styled.button`
  height: 2.5em;
  width: 2.5em;

  padding: 0;

  outline: none;
  border: none;

  background-color: ${({ theme }) => theme.color.bg.icon};
  border-radius: 50%;

  cursor: pointer;

  transition: filter 0.5s ease;

  &:hover {
    filter: brightness(80%);
  }

  svg {
    height: 100%;
    width: 100%;
    padding: 0.8em;
  }
`;

const NavBtnBase: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <BtnStyled {...props}>{children}</BtnStyled>;
};

export default NavBtnBase;
