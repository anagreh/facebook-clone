import { useState } from 'react';
import SearchBar from '../../atoms/SearchBar';
import { FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 3.5em;
`;

export const LogoWrapper = styled.div<{ isFocused: boolean }>`
  width: 3em;
  height: 3em;

  padding-inline: 0.4em;

  flex-shrink: 0;

  transition: all 0.3s;
  width: ${(props) => props.isFocused && 0};
  padding-inline: ${(props) => props.isFocused && 0}; ;
`;

const NavStartSecTop: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  return (
    <Wrapper>
      <LogoWrapper isFocused={isFocused}>
        <FaFacebook size="100%" />
      </LogoWrapper>
      <SearchBar isFocused={isFocused} />
    </Wrapper>
  );
};

export default NavStartSecTop;
