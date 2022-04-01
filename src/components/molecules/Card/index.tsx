import styled from 'styled-components';
import CirclePic from '../../atoms/CirclePic';
import { FaCross } from 'react-icons/fa';

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;

  height: 3em;

  padding-inline: 1em;

  border-radius: 0.5em;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }

  p {
    padding-inline: 1em;
  }

  button {
    border: none;
    background-color: transparent;

    position: absolute;
    right: 1em;

    border-radius: 50%;

    :hover {
      background-color: ${({ theme }) => theme.color.bg.icon};
    }
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

/**
 * width:default, height:fixed, margin:none
 */
export const SearchCard = () => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper href="/" onClick={handleClick}>
      <CirclePic />
      <p>search </p>
      <button>
        <FaCross />
      </button>
    </Wrapper>
  );
};
