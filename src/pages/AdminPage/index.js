import React from "react";
import "./index.scss";
import Card from "../../components/Card";

export default function AdminPage({ user, setUser }) {
  return (
    <div>
      <div className="adminBackground"></div>
      <div className="adminBackdrop"></div>
      <Card type="Login" user={user} setUser={setUser} />
    </div>
  );
}
