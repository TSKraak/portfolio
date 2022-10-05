import React from "react";
import "./index.scss";

export default function Projects({ data }) {
  return (
    <div className="ProjectsContainer">
      {[...data].reverse().map((dat, i) => {
        return (
          <div
            className={
              i === 0 || i % 2 === 0 ? "AlignImageLeft" : "AlignImageRight"
            }
            key={dat.id}
          >
            <div className="TextContainer">
              <h2>{dat.project}</h2>
              <h3>{dat.company}</h3>
              <p>{dat.description}</p>
              <p>{dat.about}</p>
              {dat.url && (
                <p>
                  <a href={dat.url}>Click here to see the live website</a>
                </p>
              )}
            </div>
            <div className="ImageContainer">
              {dat.image && (
                <img
                  className="ProjectImage"
                  src={dat.image}
                  alt={dat.company}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
