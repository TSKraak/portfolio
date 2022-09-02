import React from "react";
import github from "../../data/images/github.png";
import AboutMe from "../AboutMe";
import Admin from "../Admin";
import Contact from "../Contact";
import Education from "../Education";
import Experiences from "../Experiences";
import Projects from "../Projects";
import Skills from "../Skills";
import "./index.scss";

export default function Card({ type, data, user, setUser }) {
  return (
    <div className={"CardContainer"}>
      <div className="CardTitle">
        <h1>{type}</h1>
        {type === "Projects" && (
          <p>
            Find my GitHub{" "}
            <a href="https://github.com/TSKraak">
              here <img src={github} alt="github" style={{ height: "3vh" }} />
            </a>
          </p>
        )}
      </div>
      {type === "About me" && <AboutMe data={data} />}
      {type === "Projects" && <Projects data={data} />}
      {type === "Skills" && <Skills />}
      {type === "Experiences" && <Experiences data={data} />}
      {type === "Education" && <Education />}
      {type === "Contact" && <Contact />}
      {type === "Login" && <Admin user={user} setUser={setUser} />}
    </div>
  );
}
