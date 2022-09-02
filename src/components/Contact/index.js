import React from "react";
import "./index.scss";
import phone from "../../data/images/phone.png";
import mail from "../../data/images/mail.png";
import linkedin from "../../data/images/linkedin.png";
import github from "../../data/images/github.png";

export default function Contact() {
  return (
    <div className="ContactTypes">
      <p>
        <a href="tel:+31614557060">
          <img src={phone} alt="phone" />
          +31 6 14 55 70 60
        </a>
      </p>
      <p>
        <a href="mailto:tskraak@gmail.com">
          <img src={mail} alt="mail" />
          tskraak@gmail.com
        </a>
      </p>
      <p>
        <a href="https://github.com/TSKraak">
          <img src={github} alt="github" />
          TSKraak
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/thomaskraak87/">
          <img src={linkedin} alt="linkedin" />
          thomaskraak87
        </a>
      </p>
    </div>
  );
}
