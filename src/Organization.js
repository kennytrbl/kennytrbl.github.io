import React from "react";
import "./style/Organization.css";

const Organization = ({ image, link, description }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="organization" onClick={handleClick} title={description}>
      {/* eslint-disable */}
      <img src={image} className="orgImage" />
    </div>
  );
};

export default Organization;
