import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export default function NavbarItem(props) {
  return (
    <NavLink className="NavLink" as={NavLink} to={props.path}>
      {props.linkText}
    </NavLink>
  );
}
