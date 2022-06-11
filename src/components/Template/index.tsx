import { useContext } from "react";
import styled from "styled-components";
import { userCtx } from "../../context/userProvider";

interface props {
  left?: boolean;
  right?: boolean;
}

export const FixedSideContainer = styled.div<props>`
  position: sticky;
  top: 3.5em;

  width: 20em;
  height: calc(100vh - 3.5em);

  overflow-y: scroll;

  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  :hover {
    scrollbar-color: gray transparent;
    ::-webkit-scrollbar-thumb {
      background: gray;
    }
  }
`;

export const Wrapper = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 20em auto 20em;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto 20em;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto;
  }
`;

export const StartContainer = styled(FixedSideContainer)`
  /* background-color: blueviolet; */
  left: 0;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const MiddleContainer = styled.div`
  /* background-color: blue; */

  display: flex;

  flex-direction: column;
  gap: 2em;

  padding: 2em 6em;
`;

export const EndContainer = styled(FixedSideContainer)`
  /* background-color: blueviolet; */
  right: 0;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

interface HomePageTemplateProps {
  Start: React.ReactNode;
  Middle: React.ReactNode;
  End: React.ReactNode;
}
const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  Start,
  Middle,
  End,
}) => {
  const user = useContext(userCtx);
  return (
    <Wrapper>
      <StartContainer>{Start}</StartContainer>
      <MiddleContainer>{Middle}</MiddleContainer>
      <EndContainer>{End}</EndContainer>
    </Wrapper>
  );
};

export default HomePageTemplate;
