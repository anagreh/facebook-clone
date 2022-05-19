import styled from 'styled-components';

interface WrapperProps {
  height?: string;
}
export const Wrapper = styled.a<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  height: ${(props) => (props.height ? props.height : '3em')};

  padding-inline: 1em;

  border-radius: 0.5em;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }

  p {
    padding-inline: 1em;
  }

  text-decoration: none;
  color: inherit;
  :hover,
  :focus,
  :active {
    text-decoration: none;
    color: inherit;
  }
`;

export const BtnStyled = styled.button`
  border: none;
  background-color: transparent;

  position: absolute;
  right: 1em;

  border-radius: 50%;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.icon};
  }
`;
