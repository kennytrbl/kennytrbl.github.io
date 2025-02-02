import React from "react";

interface ProjectProps {
  image: string;
  name: string;
  link: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  image,
  name,
  link,
  description,
}) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="inline-block mt-2 mr-2 relative hover:cursor-pointer 
        before:content-[''] before:absolute before:inset-0 before:z-10 
        before:rounded-md before:bg-[#202b33]/30 before:opacity-100 before:transition-opacity before:duration-300 
        before:hover:opacity-0
        "
      onClick={handleClick}
      title={description}
    >
      {/* eslint-disable */}
      <img
        src={image}
        className="block h-36 w-36 object-cover rounded lg:h-48 lg:w-48"
      />
      <h2 className="absolute bg-black/50 bottom-2 left-2 right-2 m-0 pt-1 pl-2 rounded text-white z-10">
        {name}
      </h2>
    </div>
  );
};

export default Project;
