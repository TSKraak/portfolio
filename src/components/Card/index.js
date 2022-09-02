import React from "react";
import github from "../../data/images/github.png";
import AboutMe from "../AboutMe";
import Experiences from "../Experiences";
import Projects from "../Projects";
import "./index.scss";

export default function Card({ type, data }) {
  return (
    <div className={"CardContainer"}>
      <h1>{type}</h1>
      {type === "Projects" && (
        <p>
          Find my GitHub{" "}
          <a href="https://github.com/TSKraak">
            here <img src={github} alt="github" style={{ height: "3vh" }} />
          </a>
        </p>
      )}
      {type === "About me" && <AboutMe data={data} />}
      {type === "Projects" && <Projects data={data} />}
      {type === "Experiences" && <Experiences data={data} />}
    </div>
  );
}
