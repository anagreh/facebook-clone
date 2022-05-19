import CirclePic from '../../atoms/CirclePic';
import { FaCross } from 'react-icons/fa';
import React from 'react';
import { Wrapper, BtnStyled } from './Shared.styled';

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

export default SearchCard;
