import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const FormStyled = styled.form<{ isFocused: boolean }>`
  display: flex;

  height: 2.5em;
  border-radius: 5em;

  background-color: ${({ theme }) => theme.color.bg.primary};

  svg {
    height: 100%;

    padding-inline-start: 0.8em;

    transition: width 1s;
    width: ${(props) => (props.isFocused ? '0' : '2em')};

    color: ${({ theme }) => theme.color.icon.default};
  }
`;

export const InputStyled = styled.input`
  border: none;
  background-color: transparent;

  flex-grow: 1;

  padding: 0.5em;

  &:focus {
    outline: none;
  }
`;

interface props {
  isFocused: boolean;
  handleFocus: (focused: boolean) => void;
}

const SearchBar: React.FC<props> = ({ isFocused, handleFocus }) => {
  return (
    <FormStyled isFocused={isFocused}>
      <FaSearch />
      <InputStyled
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        placeholder="Search Facebook"
      ></InputStyled>
      {isFocused && <h1 style={{ position: 'absolute' }}>hi</h1>}
    </FormStyled>
  );
};

export default SearchBar;
