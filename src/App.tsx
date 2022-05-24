import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/lightTheme";
import { QueryClientProvider, QueryClient } from "react-query";

import Navbar from "./components/organisms/Navbar";
import SideNav from "./components/organisms/SideNav";
import ContactSideBar from "./components/molecules/ContactSideBar";
import HomePageTemplate from "./components/Template";
import CreatePostBtn from "./components/organisms/CreatePost/CreatePostBtn";
import PostsContainer from "./containers/posts";
import UserProvider from "./context/userProvider";

const queryClient = new QueryClient();

function App() {
  console.log("re render");

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider theme={lightTheme}>
            <Navbar />

            <HomePageTemplate
              Start={<SideNav />}
              End={<ContactSideBar />}
              Middle={
                <>
                  <CreatePostBtn />
                  <PostsContainer></PostsContainer>
                </>
              }
            />
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
