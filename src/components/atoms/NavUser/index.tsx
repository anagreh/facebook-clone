import styled from 'styled-components';

export const Wrapper = styled.a<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};

  border-radius: ${(props) => props.height};
  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }

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
  return (
    <Wrapper height="2.5em">
      <img src="https://source.unsplash.com/30x30/?portrait&img=1" alt="emam" />
      <p>Name</p>
    </Wrapper>
  );
};

export default NavUser;
