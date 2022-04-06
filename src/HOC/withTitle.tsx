import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import NavTitle from '../components/atoms/Title';

export const Wrapper = styled.div<{ fit?: boolean }>`
  position: relative;
  width: 100%;

  line-height: 0;

  ${(props) =>
    props.fit &&
    css`
      width: fit-content;
    `};
`;

interface withCounterProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
}

const withCounter = (
  OriginalComponent: React.FC<React.HTMLAttributes<HTMLElement>>,
  fit?: boolean,
): React.FC<withCounterProps> => {
  return ({ title, children, ...props }) => {
    const [opacity, setOpacity] = useState(0);

    return (
      <Wrapper fit={fit}>
        <OriginalComponent
          onMouseOver={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          {...props}
        >
          {children}
        </OriginalComponent>
        {title && <NavTitle style={{ opacity }}>{title}</NavTitle>}
      </Wrapper>
    );
  };
};

export default withCounter;
