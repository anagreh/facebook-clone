import React, { useState } from 'react';
import styled from 'styled-components';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';
import { SearchCard } from '../Cards';
import NavStartSecTop from '../NavStartSecTop';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;

  top: 0;

  padding-inline: 0.5em;

  border-radius: 0.5em;

  background-color: white;
  /* border: 1px solid gray; */
`;

export const DropMenu = styled.div`
  /* position: relative; */

  padding-bottom: 0.5em;
`;

const NavStartSec = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useOutsideAlerter(() => setIsFocused(false));

  return (
    <Wrapper ref={ref} onClick={() => setIsFocused(true)}>
      <NavStartSecTop isFocused={isFocused} />
      {isFocused && (
        <DropMenu>
          <SearchCard />
        </DropMenu>
      )}
    </Wrapper>
  );
};

export default NavStartSec;
