import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import NavTitle from '../components/atoms/Title';

export const Wrapper = styled.div<{ fit?: boolean }>`
  position: relative;

  ${(props) =>
    props.fit &&
    css`
      width: fit-content;
    `};
`;

const withCounter = (
  OriginalComponent: React.FC<React.HTMLAttributes<HTMLElement>>,
  fit?: boolean,
): React.FC<{ title?: string }> => {
  return ({ title, children }) => {
    const [opacity, setOpacity] = useState(0);

    return (
      <Wrapper fit={fit}>
        <OriginalComponent
          onMouseOver={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
        >
          {children}
        </OriginalComponent>
        {title && <NavTitle style={{ opacity }}>{title}</NavTitle>}
      </Wrapper>
    );
  };
};

export default withCounter;
