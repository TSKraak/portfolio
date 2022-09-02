import React from "react";
import "./index.scss";
import parse from "html-react-parser";

export default function AboutMe({ data }) {
  return (
    <div>
      {data.map((dat, i) => {
        return (
          <div className="AboutContainer">
            <div className="AboutTextContainer">
              <p>{parse(dat.about)}</p>
            </div>

            <div className="AboutImageContainer">
              <img src={dat.portrait} alt="portrait" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
