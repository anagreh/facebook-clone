import React, { useEffect, useState } from "react";
import Post from "../../components/organisms/Post";

const PostsContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const requestInit: RequestInit = {
          // mode: "cors",
          // credentials: "include",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjdkM2Y0OTU1ZmQwYTk1M2Q1MzcxN2EiLCJpYXQiOjE2NTI4OTU2MjMsImV4cCI6MTY1Mjk4MjAyM30.wkV-JJrkGdQ4Db7HST5VhsGZvaY90IfQxk11P9lgkmg",
          },
        };
        const postsResp = await fetch(
          "http://localhost:3200/posts",
          requestInit,
        );
        const posts: Post[] = await postsResp.json();

        console.log(posts);

        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <Post key={post._id} post={post}></Post>;
      })}
    </>
  );
};

export default PostsContainer;
