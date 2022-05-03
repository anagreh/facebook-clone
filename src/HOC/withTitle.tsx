import React, { HTMLAttributes, useState } from 'react';
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
//React.AnchorHTMLAttributes<HTMLAnchorElement>

interface withCounterProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}
function withCounter<T extends withCounterProps>(
  OriginalComponent: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
  fit?: boolean,
) {
  const NewComponent: React.FC<T> = (props) => {
    const [opacity, setOpacity] = useState(0);

    return (
      <Wrapper fit={fit}>
        <OriginalComponent
          onMouseOver={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          {...props}
        >
          {props.children}
        </OriginalComponent>
        {props.title && <NavTitle style={{ opacity }}>{props.title}</NavTitle>}
      </Wrapper>
    );
  };

  return NewComponent;
}

export default withCounter;
