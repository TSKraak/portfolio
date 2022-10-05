import React from "react";
import "./index.scss";
import parse from "html-react-parser";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function AboutMe({ data }) {
  return (
    <div>
      {data.map((dat) => {
        return (
          <div className="AboutContainer" key={dat.id}>
            <div className="AboutTextContainer">
              <p>
                My name is Thomas Kraak, living in Amsterdam and{" "}
                {getAge("11-04-1987")} years of age. I live together in an
                apartment with cat Grover.
              </p>
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
