import React from "react";
import NavStartSec from "../../molecules/NavStartSec";
import NavBtnWithMenu from "../../molecules/NavBtnWithMenu";
import styled from "styled-components";
import NavLink from "../../molecules/NavLink";
import NavUser from "../../atoms/NavUser";
import {
  FaGamepad,
  FaHome,
  FaObjectGroup,
  FaSignal,
  FaNetworkWired,
} from "react-icons/fa";
import { SettingMenu } from "../../molecules/PopupMenu";
import { NotificationMenu } from "../../molecules/PopupMenu";

export const Wrapper = styled.div`
  background-color: white;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3.5em;

  z-index: 1000;
  /* border-bottom: 1px solid gray; */
`;

export const StartCompWrapper = styled.div`
  position: relative;
  min-width: 20em;

  @media screen and (max-width: 800px) {
    min-width: 7em;
  }
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
        <NavLink title="Home" to="home">
          <FaHome />
        </NavLink>
        <NavLink title="Groups" to="/groups">
          <FaObjectGroup />
        </NavLink>
        <NavLink title="Game" to="/games">
          <FaGamepad />
        </NavLink>
      </NavWrapper>

      <UserWrapper>
        <NavUser />
      </UserWrapper>

      <EndWrapper>
        <NavBtnWithMenu
          Menu={<NotificationMenu />}
          Icon={<FaNetworkWired />}
          title={"Notifications"}
        />
        <NavBtnWithMenu
          Menu={<SettingMenu />}
          Icon={<FaSignal />}
          title={"Setting"}
        />
      </EndWrapper>
    </Wrapper>
  );
};

export default Navbar;
