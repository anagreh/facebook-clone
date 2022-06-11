import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import styled from "styled-components";
import CreateAccountForm from "../organisms/CreateAccountForm";
import LogIn from "../organisms/LogIn";

export const Wrapper = styled.div`
  display: flex;
  height: max(100vh, 600px);
  padding-inline: 6em;

  background-color: ${({ theme }) => theme.color.bg.primary};

  @media screen and (max-width: 1200px) {
    padding: 1em;
  }

  @media screen and (max-width: 884px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.div`
  padding: 3em;
  padding-top: 12em;
  flex-grow: 1;

  img {
    width: 21em;
    max-width: none;
  }
  p {
    padding-left: 1em;
    font-size: 2em;
    color: #333;
  }

  @media screen and (max-width: 1200px) {
    flex-grow: 0;

    p {
      padding-left: 1em;
      font-size: 1.4em;
      color: #333;
    }
  }

  @media screen and (max-width: 884px) {
    padding: 1em;
    padding-top: 1em;

    img {
      margin: auto;
    }
    p {
      text-align: center;
    }
  }
`;

export const LogInSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  /* background-color: blue; */
  width: 32em;
  padding: 4em;

  @media screen and (max-width: 884px) {
    padding: 1em;
  }
`;

export const LogInContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 0.6em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const SignUpWrapper = styled.div`
  width: max(100vw, 400px);
  height: max(100vh, 500px);
  position: fixed;
  background-color: rgba(100, 100, 100, 0.6);

  top: 0;
  right: 0;
`;

export const SignUpContainer = styled.div`
  position: relative;
  background-color: white;
  margin: auto;
  margin-top: 3em;
  width: 32em;

  border-radius: 0.6em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

  & > button {
    position: absolute;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    top: 1em;
    right: 1em;
    color: #999;

    :hover {
      color: black;
    }
  }
`;

interface props {
  LogInForm: React.ReactNode;
  SignUpForm: React.ReactNode;
}
const LogInTemp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Wrapper>
      <HeaderContainer>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook"
        />
        <p>Connect with friends and the world around you on Facebook.</p>
      </HeaderContainer>
      <LogInSection>
        <LogInContainer>
          <LogIn CreateAccountBtnCB={() => setIsSignUp(true)} />
        </LogInContainer>
      </LogInSection>
      {isSignUp && (
        <SignUpWrapper>
          <SignUpContainer>
            <button onClick={() => setIsSignUp(false)}>
              <FaWindowClose />
            </button>
            <CreateAccountForm />
          </SignUpContainer>
        </SignUpWrapper>
      )}
    </Wrapper>
  );
};

export default LogInTemp;
