import styled from "styled-components";

export const ViewPort = styled.div`
  position: absolute;

  top: 3.5em;
  right: 1em;

  width: 23em;

  border-radius: 0.5em;

  transition: height 0.5s;
  overflow: hidden;

  background-color: white;
  border: 1px solid gray;
`;
export const AllMenu = styled.ul`
  display: flex;
  align-items: flex-start;

  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;

  transition: transform 0.5s;
  /* transform: translateX(-50%); */
`;
export const SingleMenu = styled.li`
  width: 100%;

  flex-shrink: 0;
`;

export const BackBtn = styled.button`
  border: none;
  background-color: transparent;

  border-radius: 50%;
  font-size: 1.5em;
  margin: 0.5em;
  padding: 0.4em;

  aspect-ratio: 1;

  svg {
    display: block;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.bg.icon};
  }
`;
