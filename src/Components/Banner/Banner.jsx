import React from "react";
import ContactIcons from "../ContactIcons/ContactIcons";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <h2>Ruslan Khametov</h2>
        <p>Full Stack Developer</p>
        <ContactIcons />
      </div>
    </div>
  );
}
