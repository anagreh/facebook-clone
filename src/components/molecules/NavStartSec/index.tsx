import React, { useState } from "react";
import styled from "styled-components";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlerter";
import { SearchCard } from "../Cards";
import NavStartSecTop from "../NavStartSecTop";

export const Wrapper = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  width: 100%;
  min-width: ${(props) => (props.isExpanded ? "20em" : "")};

  top: 0;

  padding-inline: 0.5em;

  border-radius: 0.5em;

  background-color: white;

  z-index: 100;
  /* border: 1px solid gray; */
`;

export const DropMenu = styled.div`
  /* position: relative; */

  padding-bottom: 0.5em;
`;

const NavStartSec = () => {
  const [isExpanded, setIsFocused] = useState(false);
  const ref = useOutsideAlerter(() => setIsFocused(false));

  return (
    <Wrapper
      ref={ref}
      isExpanded={isExpanded}
      onClick={() => setIsFocused(true)}
    >
      <NavStartSecTop isFocused={isExpanded} />
      {isExpanded && (
        <DropMenu>
          <SearchCard />
        </DropMenu>
      )}
    </Wrapper>
  );
};

export default NavStartSec;
