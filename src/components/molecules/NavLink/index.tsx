import React, { useState } from 'react';
import styled from 'styled-components';
import NavLinkBase from '../../atoms/NavLinkBase';
import NavTitle from '../../atoms/NavTitle';

export const Wrapper = styled.div`
  position: relative;
`;

const NavLink: React.FC<{ title?: string }> = ({ title, children }) => {
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
