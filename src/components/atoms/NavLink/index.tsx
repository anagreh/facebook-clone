import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  /* const height, width 100 */
  border: 1px solid red;
  display: block;
  background-color: ${({ theme }) => theme.color.bg.default || '#fff'};
  height: 3.5em;

  padding: 0.24em 0;

  div {
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
  }

  svg {
    height: 1.75em;
    width: 1.75em;
  }
`;

interface props {
  href?: string;
}

/**
 * NavLink has fixed height
 */
const NavLink: React.FC<props> = ({ href, children }) => {
  return (
    <Wrapper href={href}>
      <div>{children}</div>
    </Wrapper>
  );
};

export default NavLink;
