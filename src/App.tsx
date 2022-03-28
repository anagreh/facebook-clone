import './styles/App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/lightTheme';

function App() {
  return <ThemeProvider theme={lightTheme}></ThemeProvider>;
}

export default App;
