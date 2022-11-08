import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../utils/mutations";
import Auth from "../utils/auth";
//
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [createUser, { error }] = useMutation(SIGN_UP);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleInfoSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createUser({
        variables: { ...userInfo },
      });

      console.log(data);
      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }

    setUserInfo({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1> LOGIN </h1>
      <form onSubmit={handleInfoSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          placeholder="UserName Here"
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userInfo.email}
          placeholder="Email Here"
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          placeholder="Password Here"
          onChange={handleInputChange}
        />

        <button>SignUp</button>
      </form>
    </div>
  );
};

export default Login;
