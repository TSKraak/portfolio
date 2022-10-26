import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "../../config/constants";
import ImageUploader from "../ImageUploader";
import "./index.scss";

export default function ExperienceForm() {
  const [experienceData, setExperienceData] = useState({
    title: "",
    logo: "",
    company: "",
    period: "",
    description: ""
  });
  const [postSuccess, setPostSuccess] = useState(false);

  const uploadImageUrl = (url) => {
    setExperienceData({ ...experienceData, logo: url });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${apiUrl}/experience`,
        {
          title: experienceData.title,
          logo: experienceData.logo,
          company: experienceData.company,
          period: experienceData.period,
          description: experienceData.description
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setExperienceData({
        title: "",
        logo: "",
        company: "",
        period: "",
        description: ""
      });
      setPostSuccess(true);
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
      <h2>Add a new experience</h2>
      <div className="ExperienceFormContainer">
        <form className="ExperienceForm">
          <div className="FieldContainer">
            <label>Title *</label>
            <input
              required
              type="text"
              id="title"
              value={experienceData.title}
              onChange={(event) =>
                setExperienceData({
                  ...experienceData,
                  title: event.target.value
                })
              }
            />
          </div>
          <div className="FieldContainer">
            <label>Logo</label>
            <input
              type="text"
              id="logo"
              value={experienceData.logo}
              onChange={(event) =>
                setExperienceData({
                  ...experienceData,
                  logo: event.target.value
                })
              }
            />
          </div>
          <ImageUploader
            uploadPreset="portfolio"
            uploadImageUrl={uploadImageUrl}
          />
          {experienceData.logo && (
            <div style={{ margin: "0.5rem 0 0 0" }}>
              <p style={{ fontSize: "0.8rem", margin: "0" }}>Image preview:</p>
              <img
                className="logo-preview"
                style={{ marginBottom: "0.5rem", width: "10rem" }}
                src={experienceData.logo}
                alt="profile pic"
              />
            </div>
          )}

          <div className="FieldContainer">
            <label>Company *</label>
            <input
              required
              type="text"
              id="company"
              value={experienceData.company}
              onChange={(event) =>
                setExperienceData({
                  ...experienceData,
                  company: event.target.value
                })
              }
            />
          </div>
          <div className="FieldContainer">
            <label>Period</label>
            <input
              type="text"
              id="period"
              value={experienceData.period}
              onChange={(event) =>
                setExperienceData({
                  ...experienceData,
                  period: event.target.value
                })
              }
            />
          </div>
          <div className="FieldContainer">
            <label>Description *</label>
            <textarea
              required
              rows="5"
              type="text"
              id="description"
              value={experienceData.description}
              onChange={(event) =>
                setExperienceData({
                  ...experienceData,
                  description: event.target.value
                })
              }
            />
          </div>
        </form>
        <button className="SubmitExpButton" value="Submit" onClick={submitForm}>
          Submit
        </button>
        {postSuccess && <h3>Experience submitted successful. </h3>}
      </div>
    </div>
  );
}
