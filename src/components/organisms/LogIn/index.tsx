import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Interface } from "readline";
import {
  FormWrapper,
  FromStyled,
  InputStyled,
  LogInBtn,
  LinkStyled,
  CreateAccountBtn,
} from "./LogIn.styled";

interface ILogIn {
  username: string;
  password: string;
}

const logInFetch = async (data: ILogIn) => {
  const resp = await fetch(process.env.REACT_APP_SERVER + "/auth/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (resp.ok === false) throw resp.statusText;

  return resp.json();
};

interface props {
  CreateAccountBtnCB: () => void;
}

const LogIn: React.FC<props> = ({ CreateAccountBtnCB }) => {
  const [form, setForm] = useState<ILogIn>({ username: "", password: "" });

  const logInMutation = useMutation(logInFetch);
  const queryClient = useQueryClient();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    logInMutation.mutate(form, {
      onSuccess: (data) => {
        localStorage.setItem("jwtToken", data.token);
        queryClient.fetchQuery("user");
      },
    });
  };

  const handleFormData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
  };

  return (
    <FormWrapper>
      <FromStyled onSubmit={handleSubmit}>
        <InputStyled
          name="username"
          placeholder="email or phone number"
          onChange={handleFormData}
          required
        />
        <InputStyled
          name="password"
          type="password"
          placeholder="password"
          onChange={handleFormData}
          required
        />
        {logInMutation.isError && <p style={{ color: "red" }}>Error</p>}
        <LogInBtn type="submit" disabled={logInMutation.isLoading}>
          {logInMutation.isLoading || logInMutation.isSuccess
            ? "singing..."
            : "Log In"}
        </LogInBtn>
        <LinkStyled to={"/restore-password"}>forgot password</LinkStyled>
      </FromStyled>
      <hr></hr>
      <CreateAccountBtn onClick={CreateAccountBtnCB}>
        Create Account
      </CreateAccountBtn>
    </FormWrapper>
  );
};

export default LogIn;
