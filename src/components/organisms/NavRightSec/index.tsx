import React, { useState } from 'react';
import styled from 'styled-components';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';
import { SearchCard } from '../../molecules/Card';
import NavStartSecTop from '../../molecules/NavStartSecTop';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;

  top: 0;

  padding-inline: 0.5em;

  border: 1px solid gray;
  border-radius: 0.5em;
`;

export const DropMenu = styled.div`
  /* position: relative; */

  padding-bottom: 0.5em;
`;

const NavRightSec = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useOutsideAlerter(() => setIsFocused(false));

  return (
    <div style={{ position: 'relative' }}>
      <Wrapper ref={ref} onClick={() => setIsFocused(true)}>
        <NavStartSecTop isFocused={isFocused} />
        {isFocused && (
          <DropMenu>
            <SearchCard />
          </DropMenu>
        )}
      </Wrapper>
    </div>
  );
};

export default NavRightSec;
