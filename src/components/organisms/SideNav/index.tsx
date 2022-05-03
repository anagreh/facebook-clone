import { FaAlipay, FaHome } from 'react-icons/fa';
import styled from 'styled-components';

export const AnchorStyled = styled.a`
  display: block;
  display: flex;
  align-items: center;
  gap: 1em;

  padding: 0.4em;
  border-radius: 0.4em;

  color: black;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
    filter: brightness(95%);
  }
`;

export const IconWrapper = styled.div`
  height: 2em;
  width: 2em;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const NotificationText = styled.p`
  /* background-color: red; */
  color: ${({ theme }) => theme.color.logo.Blue};
  font-size: 0.7em;
  line-height: 1;

  vertical-align: bottom;
  margin: 0;
`;

interface SideNavLinkProps {
  Icon: React.ReactNode;
  text: string;
  children?: null;
}

export const SideNavLink: React.FC<SideNavLinkProps> = ({ Icon, text }) => {
  return (
    <AnchorStyled href="/">
      <IconWrapper>{Icon}</IconWrapper>
      <div>
        <p>{text}</p>
        <NotificationText>&#9733; 1 new</NotificationText>
      </div>
    </AnchorStyled>
  );
};

export const ULStyled = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  gap: 1em;

  padding: 0.4em;
`;

export const LIStyled = styled.li``;

const SideNav = () => {
  return (
    <ULStyled>
      <LIStyled>
        <SideNavLink Icon={<FaHome />} text="home" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaHome />} text="home" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
      <LIStyled>
        <SideNavLink Icon={<FaAlipay />} text="Lang" />
      </LIStyled>
    </ULStyled>
  );
};

export default SideNav;
