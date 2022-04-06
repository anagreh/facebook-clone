import React from 'react';
import NavStartSec from '../organisms/NavStartSec';
import NavBtnWithMenu from '../organisms/NavBtnWithMenu';
import styled from 'styled-components';
import NavLink from '../molecules/NavLink';
import NavUser from '../atoms/NavUser';

export const Wrapper = styled.div`
  background-color: white;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3.5em;
  /* border-bottom: 1px solid gray; */
`;

export const StartCompWrapper = styled.div`
  position: relative;
  min-width: 20em;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  gap: 0.5em;
  padding-inline: 2em;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1em;
  height: 100%;
`;

export const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 1em;
  gap: 0.5em;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <StartCompWrapper>
        <NavStartSec />
      </StartCompWrapper>
      <NavWrapper>
        <NavLink>H</NavLink>
        <NavLink>T</NavLink>
        <NavLink>Y</NavLink>
      </NavWrapper>
      <UserWrapper>
        <NavUser />
      </UserWrapper>
      <EndWrapper>
        <NavBtnWithMenu />
        <NavBtnWithMenu />
        <NavBtnWithMenu />
      </EndWrapper>
    </Wrapper>
  );
};

export default Navbar;
