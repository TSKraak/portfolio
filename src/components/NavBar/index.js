import React from "react";
import NavbarItem from "./NavbarItem";
import "./index.scss";

export default function NavBar({ user, setUser, validToken, setValidToken }) {
  const handleLogout = () => {
    setUser({ username: "", password: "", token: "" });
    setValidToken(false);
    localStorage.clear();
  };

  return (
    <div className="NavBar">
      <div className="NBTitle">
        <h1>Thomas Kraak</h1>
        <h3>Full-stack developer</h3>
      </div>
      <div className="NBMenu">
        <div className="NBMenuItems">
          <NavbarItem path="/" linkText="Portfolio" />
          {/* <NavbarItem path="/travel" linkText="Travel" /> */}
          {/* <NavbarItem path="/hobbies" linkText="Hobbies" /> */}
          <NavbarItem path="/contact" linkText="Contact" />
        </div>
      </div>
      <div className="NBAdmin">
        <NavbarItem path="/admin" linkText="Admin" />
        {user.token ? <button onClick={handleLogout}>Logout</button> : null}
      </div>
    </div>
  );
}
