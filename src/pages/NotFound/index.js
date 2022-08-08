import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2>Oops, sorry. This page doesn't exist.</h2>
      <NavLink className="NavLink" to="/">
        Back to home
      </NavLink>
    </div>
  );
}
