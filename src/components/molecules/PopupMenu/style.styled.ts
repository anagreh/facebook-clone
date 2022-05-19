import styled from 'styled-components';

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
