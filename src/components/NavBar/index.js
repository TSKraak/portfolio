import React from "react";
import NavbarItem from "./NavbarItem";
import "./index.scss";

export default function NavBar({ user, setUser }) {
  const handleLogout = () => {
    setUser({ username: "", password: "", token: "" });
    localStorage.clear();
  };

  return (
    <div className="NavBar">
      <div className="NBTitle">
        <h1>Thomas Kraak - Full-stack developer</h1>
      </div>
      <div className="NBMenu">
        <div className="NBMenuItems">
          <NavbarItem path="/" linkText="Portfolio" />
          {/* <NavbarItem path="/travel" linkText="Travel" /> */}
          {/* <NavbarItem path="/hobbies" linkText="Hobbies" /> */}
          <NavbarItem path="/contact" linkText="Contact" />
        </div>
        <div className="NBAdmin">
          <NavbarItem path="/admin" linkText="Admin" />
          {user.token ? <button onClick={handleLogout}>Logout</button> : null}
        </div>
      </div>
    </div>
  );
}
