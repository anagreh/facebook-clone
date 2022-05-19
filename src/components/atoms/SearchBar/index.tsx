import styled, { css } from "styled-components";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

export const FormStyled = styled.form`
  display: flex;

  height: 2.5em;
  /* border-radius: 5em; */

  flex-grow: 1;

  div {
    display: flex;

    flex-grow: 1;
    /* height: 2.5em; */
    border-radius: 5em;

    background-color: ${({ theme }) => theme.color.bg.primary};
  }
`;

export const InputStyled = styled.input`
  border: none;
  background-color: transparent;
  width: 1em;

  flex-grow: 1;

  padding: 0.5em;

  &:focus {
    outline: none;
  }
`;

export const SearchIconStyled = styled(FaSearch)<{ isFocused: boolean }>`
  height: 100%;

  padding-inline-start: 0.8em;

  transition: width 0.3s;
  width: ${(props) => (props.isFocused ? "0" : "2em")};

  color: ${({ theme }) => theme.color.icon.default};
`;

export const BackIconStyled = styled(FaArrowLeft)<{ isFocused: boolean }>`
  height: 100%;

  padding-inline: 0em;
  width: 0em;

  flex-shrink: 0;

  transition: all 0.3s;
  ${(props) =>
    props.isFocused &&
    css`
      padding-inline: 0.4em;

      width: 2em;
    `};

  border-radius: 50%;

  color: ${({ theme }) => theme.color.icon.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }
`;

interface props {
  isFocused: boolean;
}

const SearchBar: React.FC<props> = ({ isFocused }) => {
  return (
    <FormStyled>
      <BackIconStyled isFocused={isFocused} />
      <div>
        <SearchIconStyled isFocused={isFocused} />
        <InputStyled placeholder="Search Facebook"></InputStyled>
      </div>
    </FormStyled>
  );
};

export default SearchBar;
