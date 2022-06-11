import { useContext } from "react";
import styled from "styled-components";
import { userCtx } from "../../../context/userProvider";

export const Wrapper = styled.a<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};

  border-radius: ${(props) => props.height};
  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }

  width: 7em;
  overflow: hidden;

  img {
    border-radius: 50%;
    padding: 0.2em;

    flex-shrink: 0;
  }
  p {
    line-height: ${(props) => props.height};
    padding-inline: 0.2em;
    padding-inline-end: 1em;
  }
`;

const NavUser = () => {
  const user = useContext(userCtx);

  return (
    <Wrapper height="2.5em">
      <img src={user?.personal_img} alt="img" />
      <p>{user?.first_name.slice(0, 7)}</p>
    </Wrapper>
  );
};

export default NavUser;
