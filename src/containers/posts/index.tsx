import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Post from "../Post";

async function fetchPosts() {
  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
  };
  const postsResp = await fetch(process.env.REACT_APP_SERVER + "/posts", requestInit);
  if (postsResp.ok === false) throw postsResp.statusText;
  return postsResp.json() as Promise<Post[]>;
}

const PostsContainer = () => {
  const { data: posts } = useQuery(["posts"], fetchPosts, { initialData: [] });

  return (
    <>
      {posts?.map((post) => {
        return <Post key={post._id} post={post}></Post>;
      })}
    </>
  );
};

export default PostsContainer;
