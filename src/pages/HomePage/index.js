import React, { useEffect } from "react";
import "./index.scss";
import portrait from "../../data/images/portrait.jpeg";
import github from "../../data/images/github.png";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export default function HomePage({
  experiences,
  setExperiences,
  projects,
  setProjects,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const expResponse = await axios.get(`${apiUrl}/experience`);
        const projResponse = await axios.get(`${apiUrl}/project`);

        setExperiences(expResponse.data);
        setProjects(projResponse.data);
      } catch (error) {
        console.log("Something went wrong:", error);
      }
    };
    fetchData();
  });

  return (
    <div className="HomePageContainer">
      <div className="AboutContainer">
        <div className="AboutTextContainer">
          <h1>About me</h1>
          <p>
            I am an enthusiastic and social full-stack developer, passionate
            about creating beautiful web- and mobile applications.
          </p>
          <p>
            I’m at my best in a social and inspiring environment where as a
            team, we get the best out of every individual and create something
            amazing.
          </p>
          <p>
            Background: In 2020 I decided to completely change the course of my
            career. By asking myself the question what makes me happy and gives
            me energy for the coming years. The last years I’ve been working as
            a building engineer, where I noticed that I get pleasure out of
            designing complex features. I started looking around, asking friends
            and family for advice but most importantly I started listening to
            what I feel passionate about. Which led me to the answer that I want
            to create innovative and complex websites/applications;
          </p>
          <p>I’m going to be a developer.</p>
        </div>
        <div className="AboutImageContainer">
          <img src={portrait} alt="portrait" />
        </div>
      </div>
      <div className="ProjectsContainer">
        <h1>Projects</h1>
        <p>
          Find my GitHub{" "}
          <a href="https://github.com/TSKraak">
            here <img src={github} alt="github" style={{ height: "3vh" }} />
          </a>
        </p>
        {projects.map((proj, i) => {
          return (
            <div
              className={
                i === 0 || i % 2 === 0 ? "AlignImageLeft" : "AlignImageRight"
              }
              key={proj.project}
            >
              <div className="TextContainer">
                <h2>{proj.project}</h2>
                <h3>{proj.company}</h3>
                <p>{proj.description}</p>
                {proj.url ? (
                  <p>
                    <a href={proj.url}>Click here to see the live website</a>
                  </p>
                ) : null}
              </div>
              <div className="ImageContainer">
                <img
                  className="ProjectImage"
                  src={proj.image}
                  alt={proj.company}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="SkillsContainer">
        <h1>Skills</h1>
      </div> */}
      <div className="ExperienceContainer">
        <h1>Experience</h1>
        {experiences.map((exp) => {
          return (
            <div className="ExpData" key={exp.company}>
              <span>
                <h2 className="ExpTitle">{exp.title}</h2>
                <p>
                  <span className="ExpCompany">{exp.company}</span>
                  <span className="ExpPeriod">{exp.period}</span>
                </p>
                <p className="ExpDescription">{exp.description}</p>
              </span>
              <img className="ExpLogo" src={exp.logo} alt={exp.company} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
