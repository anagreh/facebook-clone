import React from 'react';
import styled from 'styled-components';

export const BtnStyled = styled.button`
  height: 3em;
  width: 3em;

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
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 100%;

  padding: 0.8em;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const NavBtnBase: React.FC = ({ children, ...props }) => {
  return (
    <div style={{ padding: '0.25em' }}>
      <BtnStyled {...props}>
        <IconContainer>{children}</IconContainer>
      </BtnStyled>
    </div>
  );
};

export default NavBtnBase;
