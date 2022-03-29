import React, { useState } from 'react';
import styled from 'styled-components';
import NavLinkBase from '../../atoms/NavLinkBase';
import NavTitle from '../../atoms/NavTitle';

export const Wrapper = styled.div`
  position: relative;

  transition: opacity 1s ease-in;
`;

const NavLink: React.FC<{ title?: string }> = ({ title, children }) => {
  const [isTitleShown, setIsTitleShown] = useState(false);
  const [opacity, setOpacity] = useState(0);

  return (
    <Wrapper>
      <NavLinkBase
        onMouseOver={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
      >
        {children}
      </NavLinkBase>
      {title && <NavTitle style={{ opacity }}>{title}</NavTitle>}
    </Wrapper>
  );
};

export default NavLink;
