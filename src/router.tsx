import { useContext } from "react";
import ContactSideBar from "./components/molecules/ContactSideBar";
import CreateAccountForm from "./components/organisms/CreateAccountForm";
import CreatePostBtn from "./components/organisms/CreatePost/CreatePostBtn";
import LogIn from "./components/organisms/LogIn";
import Navbar from "./components/organisms/Navbar";
import SideNav from "./components/organisms/SideNav";
import HomePageTemplate from "./components/Template";
import LogInTemp from "./components/Template/LogInTemp";
import PostsContainer from "./containers/posts";
import { userCtx } from "./context/userProvider";

const MyRouter = () => {
  const user = useContext(userCtx);

  // if (user === null) return <CreateAccountForm />;
  // if (user === null) return <LogIn />;
  if (user === null) return <LogInTemp />;

  return (
    <>
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
    </>
  );
};

export default MyRouter;
