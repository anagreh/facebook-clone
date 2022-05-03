import PersonalImg from '../../atoms/PersonalImg';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  padding: 0.5em;

  border-radius: 0.4em;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }
`;

export const ImgWrapper = styled.div`
  height: 2.5em;
  width: 2.5em;
`;

const ContactCard = () => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <PersonalImg src="https://source.unsplash.com/50x50/?portrait&img=8" />
      </ImgWrapper>
      <p>Emam</p>
    </CardWrapper>
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

const ContactSideBar = () => {
  return (
    <ULStyled>
      <LIStyled>
        <ContactCard />
      </LIStyled>
      <LIStyled>
        <ContactCard />
      </LIStyled>
    </ULStyled>
  );
};

export default ContactSideBar;
