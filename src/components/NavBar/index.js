import React from "react";
import NavbarItem from "./NavbarItem";
import "./index.scss";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NBTitle">
        <h1>Thomas Kraak - Full-stack developer</h1>

        <div className="NBMenu">
          <NavbarItem path="/" linkText="CV" />
          <NavbarItem path="/travel" linkText="Travel" />
          <NavbarItem path="/hobbies" linkText="Hobbies" />
          <NavbarItem path="/contact" linkText="Contact" />
        </div>
      </div>
    </div>
  );
}
