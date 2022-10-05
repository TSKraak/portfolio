import React, { useEffect, useState } from "react";
import ProjectForm from "../ProjectForm";
import ExperienceForm from "../ExperienceForm";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import "./index.scss";

export default function Admin({ user, setUser, validToken, setValidToken }) {
  const [addData, setaddData] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const checkToken = async () => {
      if (token) {
        try {
          const response = await axios.get(`${apiUrl}/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser({ token, ...response.data });
          setValidToken(true);
        } catch (error) {
          if (error.response) {
            console.log("ERROR:", error.response.message);
          } else {
            console.log("ERROR:", error);
          }
          // if we get a 4xx or 5xx response,
          // get rid of the token by logging out
          setUser({ username: "", password: "", token: "" });
          localStorage.clear();
        }
      }
    };

    checkToken();
  }, [setUser, setValidToken]);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        username: user.username,
        password: user.password,
      });
      setUser(response.data);
      setValidToken(true);
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
      {!user.token || !validToken ? (
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
      {addData === "project" && <ProjectForm />}
      {addData === "experience" && <ExperienceForm />}
    </div>
  );
}
