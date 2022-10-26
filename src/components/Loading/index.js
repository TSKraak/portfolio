import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "./index.scss";

export default function Loading() {
  return (
    <div className="spinner_container">
      <div className="loading_spinner">
        <ThreeCircles
          className="loading_spinner"
          type="ThreeDots"
          color="#668051"
          height="100"
          width="100"
        />
      </div>
    </div>
  );
}
