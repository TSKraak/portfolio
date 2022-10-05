import React, { useState } from "react";
import ImageUploader from "../ImageUploader";
import "./index.scss";

export default function ExperienceForm() {
  const [experienceData, setExperienceData] = useState({
    title: "",
    logo: "",
    company: "",
    period: "",
    description: "",
  });

  const uploadImageUrl = (url) => {
    setExperienceData({ ...experienceData, logo: url });
  };

  return (
    <div className="ExperienceFormContainer">
      <h2>Add a new experience</h2>
      <form className="ExperienceForm">
        <label>Title:</label>
        <input type="text" id="fname" />
        <label>Logo:</label>
        <input
          type="text"
          id="logo"
          value={experienceData.logo}
          onChange={(event) =>
            setExperienceData({ ...experienceData, logo: event.target.value })
          }
        />
        <ImageUploader
          uploadPreset="portfolio"
          uploadImageUrl={uploadImageUrl}
        />
        {experienceData.logo && (
          <div style={{ margin: "1rem 0 0 0" }}>
            <p style={{ fontSize: "0.8rem" }}>Image preview:</p>
            <img
              className="logo-preview"
              style={{ width: "5rem" }}
              src={experienceData.logo}
              alt="profile pic"
            />
          </div>
        )}
        <label>Company:</label>
        <input type="text" id="company" />
        <label>Period:</label>
        <input type="text" id="period" />
        <label>Description:</label>
        <input type="text" id="description" />
      </form>
    </div>
  );
}
