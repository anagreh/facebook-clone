import React, { useState } from "react";
import { DateInput } from "./DateInput";
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import isEmpty from "validator/es/lib/isEmpty";

import {
  Wrapper,
  HeaderStyle,
  FormStyled,
  NameWrapper,
  InputStyled,
  RadioInputSecWrapper,
  RadioInputsWrapper,
  RadioInputWrapper,
  BtnStyled,
} from "./form.styled";
import styled from "styled-components";
import { useMutation } from "react-query";

export const InputErrorWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;
const ErrorWrapper = styled.div`
  position: absolute;
  color: white;
  bottom: 100%;
  border: 1px solid #c44;
  background-color: #c88;

  border-radius: 0.3em;
`;

export type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthday_month: string;
  birthday_day: string;
  birthday_year: string;
  sex: string;
};

const initialFromData: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday_month: "",
  birthday_day: "",
  birthday_year: "",
  sex: "",
};

const createUserApi = async (user: FormData) => {
  const requestInit: RequestInit = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    method: "POST",
    body: JSON.stringify(user),
  };

  const resp = await fetch(
    process.env.REACT_APP_SERVER + `/users`,
    requestInit,
  );

  if (resp.ok === false) throw resp.statusText;
  return resp.json();
};

const CreateAccountForm = () => {
  const [formData, setFormValue] = useState(initialFromData);
  const [formError, setFormError] = useState(initialFromData);
  const [focusedElem, setFocusedElem] = useState<string>();

  const createUser = useMutation(createUserApi);

  const handleFormData: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setFormError((old) => ({ ...old, [e.target.name]: "" }));
    setFormValue((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const firstNameValidation = () => {
    if (isEmpty(formData.first_name)) {
      setFormError((old) => ({ ...old, first_name: "required" }));
      return false;
    } else {
      setFormError((old) => ({ ...old, first_name: "" }));
      return true;
    }
  };

  function lastNameValidation() {
    if (isEmpty(formData.last_name)) {
      setFormError((old) => ({ ...old, last_name: "required" }));
      return false;
    } else {
      setFormError((old) => ({ ...old, last_name: "" }));
      return true;
    }
  }

  function passwordValidation() {
    if (isStrongPassword(formData.password) === false) {
      setFormError((old) => ({
        ...old,
        password:
          "must contain capital letter ,small letter, number, special Character",
      }));
      return false;
    } else {
      setFormError((old) => ({ ...old, password: "" }));
      return true;
    }
  }

  function emailValidation() {
    if (isEmail(formData.email) === false) {
      setFormError((old) => ({
        ...old,
        email: "must be valid email",
      }));
      return false;
    } else {
      setFormError((old) => ({ ...old, email: "" }));
      return true;
    }
  }

  function sexValidation() {
    if (formData.sex !== "male" && formData.sex !== "female") {
      setFormError((old) => ({
        ...old,
        sex: "required",
      }));
      return false;
    } else {
      setFormError((old) => ({ ...old, email: "" }));
      return true;
    }
  }

  function birthdayValidation() {
    // FIXME: make it fail if the age is not correct
    if (
      isNaN(parseInt(formData.birthday_year)) ||
      parseInt(formData.birthday_year) > 2008
    ) {
      setFormError((old) => ({
        ...old,
        birthday_year: "wrong date",
      }));
      return false;
    } else {
      setFormError((old) => ({ ...old, email: "" }));
      return true;
    }
  }

  const checkValidation: React.FocusEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setFocusedElem("");
    const name = e.target.name;

    switch (name) {
      case "first_name":
        firstNameValidation();
        break;

      case "last_name":
        lastNameValidation();
        break;

      case "email":
        emailValidation();
        break;

      case "password":
        passwordValidation();
        break;

      case "sex":
        sexValidation();
        break;

      case "birthday_day":
      case "birthday_month":
      case "birthday_year":
        birthdayValidation();
        break;
      default:
        break;
    }
  };

  const isFormValid = (): boolean => {
    const allValidation = [
      firstNameValidation(),
      lastNameValidation(),
      passwordValidation(),
      emailValidation(),
      sexValidation(),
      birthdayValidation(),
    ];

    if (allValidation.includes(false)) return false;

    return true;
  };

  const handleFocus: React.FocusEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setFocusedElem(e.target.name);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isFormValid() === false) return;

    createUser.mutateAsync(formData, {
      onSuccess: () => {
        setFormValue(initialFromData);
        //TODO: redirect to home page
      },
    });
    console.log("submit");
  };

  return (
    <Wrapper>
      <HeaderStyle>
        <h1>Sign Up</h1>
        <p>It’s quick and easy.</p>
      </HeaderStyle>

      <hr />
      <FormStyled onSubmit={handleSubmit}>
        <NameWrapper>
          <InputErrorWrapper>
            <InputStyled
              value={formData.first_name}
              error={!!formError.first_name}
              onChange={handleFormData}
              onFocus={handleFocus}
              onBlur={checkValidation}
              name="first_name"
              placeholder="First Name"
            />
            {formError.first_name && focusedElem === "first_name" && (
              <ErrorWrapper>{formError.first_name}</ErrorWrapper>
            )}
          </InputErrorWrapper>

          <InputErrorWrapper>
            <InputStyled
              name="last_name"
              placeholder="Last Name"
              error={!!formError.last_name}
              value={formData.last_name}
              onChange={handleFormData}
              onBlur={checkValidation}
              onFocus={handleFocus}
            />
            {formError.last_name && focusedElem === "last_name" && (
              <ErrorWrapper>{formError.last_name}</ErrorWrapper>
            )}
          </InputErrorWrapper>
        </NameWrapper>

        <InputErrorWrapper>
          <InputStyled
            type="email"
            name="email"
            value={formData.email}
            error={!!formError.email}
            onChange={handleFormData}
            onBlur={checkValidation}
            onFocus={handleFocus}
            placeholder="Email"
          />
          {formError.email && focusedElem === "email" && (
            <ErrorWrapper>{formError.email}</ErrorWrapper>
          )}
        </InputErrorWrapper>

        <InputErrorWrapper>
          <InputStyled
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
            onBlur={checkValidation}
            onFocus={handleFocus}
            error={!!formError.password}
            placeholder="Password"
          />
          {formError.password && focusedElem === "password" && (
            <ErrorWrapper>{formError.password}</ErrorWrapper>
          )}
        </InputErrorWrapper>

        <DateInput
          formData={formData}
          error={!!formError.birthday_year}
          onChange={handleFormData}
          onBlur={checkValidation}
          onFocus={handleFocus}
          required
        />

        <RadioInputSecWrapper>
          <p>Gender</p>

          <RadioInputsWrapper>
            <RadioInputWrapper error={!!formError.sex}>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={formData.sex === "male"}
                onChange={handleFormData}
                onFocus={handleFocus}
                onBlur={checkValidation}
                id="male"
              />
            </RadioInputWrapper>
            <RadioInputWrapper error={!!formError.sex}>
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={formData.sex === "female"}
                onChange={handleFormData}
                onFocus={handleFocus}
                onBlur={checkValidation}
                id="female"
              />
            </RadioInputWrapper>
          </RadioInputsWrapper>
        </RadioInputSecWrapper>

        <BtnStyled>Sign Up</BtnStyled>
      </FormStyled>
    </Wrapper>
  );
};

export default CreateAccountForm;
