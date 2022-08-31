import React from "react";
import "./index.scss";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export default function AdminPage({ user, setUser }) {
  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        username: user.username,
        password: user.password,
      });
      setUser(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      {!user.token ? (
        <div>
          <h1>Login</h1>
          <form className="loginForm">
            <label className="usernameField">
              Username:
              <input
                type="text"
                value={user.username}
                onChange={(event) =>
                  setUser({ ...user, username: event.target.value })
                }
              />
            </label>
            <label className="passwordField">
              Password:
              <input
                type="password"
                value={user.password}
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
            </label>
            <button className="loginButton" type="submit" onClick={submitForm}>
              Login
            </button>
          </form>
        </div>
      ) : (
        "Welcome back!"
      )}
    </div>
  );
}
