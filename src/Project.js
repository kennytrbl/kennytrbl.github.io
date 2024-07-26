import React from "react";
import "./style/Project.css";

const Project = ({ image, name, link, description }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="project" onClick={handleClick} title={description}>
      {/* eslint-disable */}
      <img src={image} className="projectImage" />
      <h2 className="projectName">{name}</h2>
    </div>
  );
};

export default Project;
