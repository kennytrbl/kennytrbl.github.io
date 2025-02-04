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
  return (
    <p className="inline-block mt-2 mr-2 pr-2 relative hover:cursor-pointer">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={description}
        className="block"
      >
        <img src={image} className="block object-cover rounded w-36 h-36" />
      </a>
    </p>
  );
};

export default Organization;
