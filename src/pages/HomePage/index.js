import React, { useEffect } from "react";
import "./index.scss";
import { apiUrl } from "../../config/constants";
import axios from "axios";
import Card from "../../components/Card";

export default function HomePage({
  about,
  setAbout,
  experiences,
  setExperiences,
  projects,
  setProjects,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutResponse = await axios.get(`${apiUrl}/about`);
        const expResponse = await axios.get(`${apiUrl}/experience`);
        const projResponse = await axios.get(`${apiUrl}/project`);

        setAbout(aboutResponse.data);
        setExperiences(expResponse.data);
        setProjects(projResponse.data);
      } catch (error) {
        console.log("Something went wrong:", error);
      }
    };
    fetchData();
  }, [setAbout, setExperiences, setProjects]);

  return (
    <div className="HomePageContainer">
      <div className="homeBackground"></div>
      <div className="homeBackdrop"></div>
      <Card type="About me" data={about} />
      <Card type="Projects" data={projects} />
      <Card type="Skills" />
      <Card type="Experiences" data={experiences} />
      <Card type="Education" />
    </div>
  );
}
