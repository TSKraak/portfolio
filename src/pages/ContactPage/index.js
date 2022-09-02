import React from "react";
import Card from "../../components/Card";
import "./index.scss";

export default function ContactPage() {
  return (
    <div>
      <div className="contactBackground"></div>
      <div className="contactBackdrop"></div>
      <Card type="Contact" />
    </div>
  );
}
