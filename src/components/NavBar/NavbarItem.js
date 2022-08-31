import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export default function NavbarItem({ path, linkText }) {
  return (
    <NavLink className={`NavLink`} as={NavLink} to={path}>
      {linkText}
    </NavLink>
  );
}
