import PersonalImg from "../../atoms/PersonalImg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5em;

  padding: 0.5em;

  border-radius: 0.4em;

  color: inherit;
  text-decoration: inherit;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }
`;

export const ImgWrapper = styled.div`
  height: 2.5em;
  width: 2.5em;
`;

// TODO: del
const user = {
  imgSrc: "https://source.unsplash.com/50x50/?portrait&img=8",
  to: "/099",
  name: "Emam",
};
// user
const ContactCard = () => {
  return (
    <CardWrapper to={user.to}>
      <ImgWrapper>
        <PersonalImg src={user.imgSrc} />
      </ImgWrapper>
      <p>{user.name}</p>
    </CardWrapper>
  );
};

export const SectionStyled = styled.section`
  padding-block: 1em;
`;

export const ULStyled = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  gap: 1em;

  padding: 0.4em;
`;

export const HeaderStyled = styled.header`
  padding-inline: 1em;
`;

export const LIStyled = styled.li``;

// TODO: del
const friends = [{}, {}];
//contact
const ContactSideBar = () => {
  return (
    <SectionStyled>
      <HeaderStyled>Contact</HeaderStyled>
      <ULStyled>
        {friends.map((user, i) => {
          return (
            <LIStyled key={i}>
              <ContactCard />
            </LIStyled>
          );
        })}
      </ULStyled>
    </SectionStyled>
  );
};

export default ContactSideBar;
