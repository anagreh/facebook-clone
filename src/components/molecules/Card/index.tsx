import styled from 'styled-components';
import CirclePic from '../../atoms/CirclePic';
import { FaAngleDoubleRight, FaCross } from 'react-icons/fa';
import React from 'react';
import NavBtnBase from '../../atoms/NavBtnBase';
import IconBase from '../../atoms/Icon';

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
      <BtnStyled>
        <FaCross />
      </BtnStyled>
    </Wrapper>
  );
};

interface props extends React.HTMLAttributes<HTMLElement> {
  hasSecondaryMenu?: boolean;
}

/**
 * width:default, height:fixed, margin:none
 */
export const AccountMenuCard: React.FC<props> = ({
  hasSecondaryMenu = false,
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <IconBase size="2.5em">{children}</IconBase>
      <p>search </p>
      {hasSecondaryMenu && (
        <BtnStyled>
          <FaAngleDoubleRight />
        </BtnStyled>
      )}
    </Wrapper>
  );
};
