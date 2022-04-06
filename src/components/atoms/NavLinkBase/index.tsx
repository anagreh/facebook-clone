import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  /* const height, width 100 */
  display: block;

  height: 3.5em;
  width: 100%;
  padding: 0.24em 0;

  svg {
    height: 1.75em;
    width: 1.75em;
  }
`;
export const Highlight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 0.16em;

  border-radius: 0.5em;

  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.bg.hover || '#ddd'};
  }
`;

/**
 * NavLink has fixed height
 */
const NavLinkBase: React.FC<React.HTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Highlight>{children}</Highlight>
    </Wrapper>
  );
};

export default NavLinkBase;
