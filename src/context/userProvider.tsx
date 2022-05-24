import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const userCtx = createContext<User | null>(null);

const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  console.log(user);

  useEffect(() => {
    async function fetchUser() {
      try {
        const requestInit: RequestInit = {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_JWT,
          },
        };

        const userResp = await fetch(
          process.env.REACT_APP_SERVER + `/auth/profile`,
          requestInit,
        );
        const user = await userResp.json();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);

  return <userCtx.Provider value={user}>{props.children}</userCtx.Provider>;
};

export default UserProvider;
