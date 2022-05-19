import { FaGamepad, FaObjectGroup, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AnchorStyled = styled(Link)`
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
  href: string;
  children?: null;
}

export const SideNavLink: React.FC<SideNavLinkProps> = ({
  Icon,
  text,
  href,
}) => {
  return (
    <AnchorStyled to={href}>
      <IconWrapper>{Icon}</IconWrapper>
      <div>
        <p>{text}</p>
        {false && <NotificationText>&#9733; 1 new</NotificationText>}
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
      <LIStyled>user name</LIStyled>
      <LIStyled>
        <SideNavLink
          href={'/friends'}
          Icon={<FaUserFriends />}
          text="Friends"
        />
      </LIStyled>
      <LIStyled>
        <SideNavLink href={'/groups'} Icon={<FaObjectGroup />} text="Groups" />
      </LIStyled>
      <LIStyled>
        <SideNavLink href={'/games'} Icon={<FaGamepad />} text="Game" />
      </LIStyled>
    </ULStyled>
  );
};

export default SideNav;
