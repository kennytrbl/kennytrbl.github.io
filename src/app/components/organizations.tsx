import React from "react";

interface OrganizationProps {
  image: string;
  link: string;
  description: string;
}

const Organization: React.FC<OrganizationProps> = ({
  image,
  link,
  description,
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className="box-border inline-block mt-2 mr-2 pr-2 relative hover:cursor-pointer"
      onClick={handleClick}
      title={description}
    >
      {/* eslint-disable */}
      <img src={image} className="block w-32 h-32 object-cover rounded" />
    </div>
  );
};

export default Organization;
