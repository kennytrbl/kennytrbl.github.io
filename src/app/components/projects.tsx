import React from "react";
import Image from "next/image";

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
  return (
    <div className="inline-block mt-2 mr-2 relative hover:cursor-pointer ">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={description}
        className="block before:content-[''] before:absolute before:inset-0 before:z-10 
        before:rounded-md before:bg-[#202b33]/30 before:opacity-100 before:transition-opacity before:duration-300 
        before:hover:opacity-0"
      >
        <Image
          alt=""
          src={image}
          height={160}
          width={160}
          className="block object-cover rounded lg:h-48 lg:w-48"
        />
        <div className="absolute bg-black/50 bottom-2 left-2 right-2 m-0 pt-1 pl-2 rounded text-white z-10">
          {name}
        </div>
      </a>
    </div>
  );
};

export default Project;
