import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/lightTheme";

import Post from "./components/organisms/Post";
import Navbar from "./components/organisms/Navbar";
import SideNav from "./components/organisms/SideNav";
import ContactSideBar from "./components/molecules/ContactSideBar";
import HomePageTemplate from "./components/Template";
import CreatePostBtn from "./components/organisms/CreatePost";
import PostsContainer from "./containers/posts";

function App() {
  console.log("re render");

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
