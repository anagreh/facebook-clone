import React from 'react';
import styled from 'styled-components';

export const IconStyled = styled.div<{ size: string }>`
  background-color: ${({ theme }) => theme.color.bg.icon};

  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};

  transition: filter 0.5s ease;

  &:hover {
    filter: brightness(80%);
  }

  svg {
    height: 100%;
    width: 100%;
    padding: 25%;
  }
`;

interface props {
  size?: string;
}
const IconBase: React.FC<props> = ({ size = '3em', children, ...props }) => {
  return (
    <IconStyled size={size} {...props}>
      {children}
    </IconStyled>
  );
};

export default IconBase;
