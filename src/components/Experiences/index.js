import React from "react";
import "./index.scss";

export default function Experiences({ data }) {
  return (
    <div className="ExperienceContainer">
      {data.map((dat) => {
        return (
          <div className="ExpData" key={dat.company}>
            <div className="ExpText">
              <h2 className="ExpTitle">{dat.title}</h2>
              <div>
                <h3 className="ExpCompany">{dat.company}</h3>
                <p className="ExpPeriod">{dat.period}</p>
              </div>
              <p className="ExpDescription">{dat.description}</p>
            </div>
            <img className="ExpLogo" src={dat.logo} alt={dat.company} />
          </div>
        );
      })}
    </div>
  );
}
