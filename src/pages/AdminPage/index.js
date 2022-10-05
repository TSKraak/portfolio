import React from "react";
import "./index.scss";
import Card from "../../components/Card";

export default function AdminPage({
  user,
  setUser,
  validToken,
  setValidToken,
}) {
  return (
    <div>
      <div className="adminBackground"></div>
      <div className="adminBackdrop"></div>
      <Card
        type="Admin"
        user={user}
        setUser={setUser}
        validToken={validToken}
        setValidToken={setValidToken}
      />
    </div>
  );
}
