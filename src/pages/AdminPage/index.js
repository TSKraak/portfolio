import React, { useState } from "react";
import "./index.scss";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import AddProjectForm from "../../components/AddProjectForm";
import AddExperienceForm from "../../components/AddExperienceForm";

export default function AdminPage({ user, setUser }) {
  const [addData, setaddData] = useState();

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
        <div className="addButtons">
          <button
            className="addProjectButton"
            onClick={() => setaddData("project")}
          >
            Add Project
          </button>
          <button
            className="addExperienceButton"
            onClick={() => setaddData("experience")}
          >
            Add Experience
          </button>
        </div>
      )}
      {addData === "project" && <AddProjectForm />}
      {addData === "experience" && <AddExperienceForm />}
    </div>
  );
}
