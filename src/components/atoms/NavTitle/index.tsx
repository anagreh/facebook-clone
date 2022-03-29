import styled from 'styled-components';

export const NavTitle = styled.p`
  position: absolute;

  height: 2em;

  top: 100%;

  left: 50%;
  transform: translateX(-50%);

  padding-inline: 1em;

  text-align: center;
  line-height: 2em;
  border-radius: 0.3em;

  background-color: ${({ theme }) => theme.color.bg.tag};
  color: ${({ theme }) => theme.color.bg.default};

  opacity: 0;
  transition: opacity 0.5s ease-in;
`;

export default NavTitle;
