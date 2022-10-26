import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "../../config/constants";
import ImageUploader from "../ImageUploader";
import "./index.scss";

export default function ProjectForm() {
  const [projectData, setProjectData] = useState({
    project: "",
    image: "",
    company: "",
    description: "",
    url: ""
  });
  const [postSuccess, setPostSuccess] = useState(false);

  const uploadImageUrl = (url) => {
    setProjectData({ ...projectData, image: url });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${apiUrl}/project`,
        {
          project: projectData.project,
          image: projectData.image,
          company: projectData.company,
          description: projectData.description,
          url: projectData.url
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setProjectData({
        project: "",
        image: "",
        company: "",
        description: "",
        url: ""
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
      <h2>Add a new project</h2>
      <div className="ProjectFormContainer">
        <form className="ProjectForm">
          <div className="FieldContainer">
            <label>Project *</label>
            <input
              required
              type="text"
              id="project"
              value={projectData.project}
              onChange={(event) =>
                setProjectData({
                  ...projectData,
                  project: event.target.value
                })
              }
            />
          </div>
          <div className="FieldContainer">
            <label>Image</label>
            <input
              type="text"
              id="image"
              value={projectData.image}
              onChange={(event) =>
                setProjectData({
                  ...projectData,
                  image: event.target.value
                })
              }
            />
          </div>
          <ImageUploader
            uploadPreset="portfolio"
            uploadImageUrl={uploadImageUrl}
          />
          {projectData.image && (
            <div style={{ margin: "0.5rem 0 0 0" }}>
              <p style={{ fontSize: "0.8rem", margin: "0" }}>Image preview:</p>
              <img
                className="image-preview"
                style={{ marginBottom: "0.5rem", width: "10rem" }}
                src={projectData.image}
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
              value={projectData.company}
              onChange={(event) =>
                setProjectData({
                  ...projectData,
                  company: event.target.value
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
              value={projectData.description}
              onChange={(event) =>
                setProjectData({
                  ...projectData,
                  description: event.target.value
                })
              }
            />
          </div>
          <div className="FieldContainer">
            <label>Website URL</label>
            <input
              type="text"
              value={projectData.url}
              id="url"
              onChange={(event) =>
                setProjectData({
                  ...projectData,
                  url: event.target.value
                })
              }
            />
          </div>
        </form>
        <button
          className="SubmitProjectButton"
          value="Submit"
          onClick={submitForm}>
          Submit
        </button>
        {postSuccess && (
          <h3 class="SubmitProjectSucces">Project submitted successful. </h3>
        )}
      </div>
    </div>
  );
}
