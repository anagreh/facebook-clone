import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/lightTheme";
import { QueryClientProvider, QueryClient } from "react-query";

import UserProvider from "./context/userProvider";
import MyRouter from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider theme={lightTheme}>
            <MyRouter />
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
