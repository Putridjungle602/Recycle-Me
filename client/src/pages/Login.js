import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleInfoSubmit = async (event) => {
    event.preventDefault();

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const { data } = await login({
        variables: { ...userInfo },
      });

      console.log(data);
      Auth.login(data.login.token);
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
        <button>Login</button>
      </form>
      <Link to="/signUp">
        <h3>Sign Up</h3>
      </Link>
    </div>
  );
};

export default Login;
