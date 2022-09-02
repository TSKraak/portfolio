import React, { useState } from "react";
import AddProjectForm from "../../components/AddProjectForm";
import AddExperienceForm from "../../components/AddExperienceForm";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import "./index.scss";

export default function Admin({ user, setUser }) {
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
          <form className="loginForm">
            <label className="usernameField">
              <span>Username:</span>
              <input
                type="text"
                value={user.username}
                onChange={(event) =>
                  setUser({ ...user, username: event.target.value })
                }
              />
            </label>
            <label className="passwordField">
              <span>Password:</span>
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
