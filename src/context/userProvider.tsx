import React, { useState } from "react";
import { createContext } from "react";
import { useQuery } from "react-query";

const fetchUser = async () => {
  if (localStorage.getItem("jwtToken") === null) return null;

  const requestInit: RequestInit = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
  };

  const userResp = await fetch(
    process.env.REACT_APP_SERVER + `/auth/profile`,
    requestInit,
  );

  if (userResp.ok === false) throw userResp.statusText;
  return userResp.json();
};

export const userCtx = createContext<User | null>(null);
export const setUserCtx = createContext<
  React.Dispatch<React.SetStateAction<User | null>>
>(() => {});
export const logOutCtx = createContext(() => {});

const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useQuery("user", fetchUser, {
    onSuccess: (data) => setUser(data),
    refetchOnWindowFocus: false,
  });

  const logOut = () => {
    setUser(null);

    // TODO: add that token to black list in the server

    localStorage.removeItem("jwtToken");
  };

  return (
    <userCtx.Provider value={user}>
      <setUserCtx.Provider value={setUser}>
        <logOutCtx.Provider value={logOut}>{props.children}</logOutCtx.Provider>
      </setUserCtx.Provider>
    </userCtx.Provider>
  );
};

export default UserProvider;
