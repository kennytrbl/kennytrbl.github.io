import React from "react";
import Image from "next/image";

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
        <Image
          alt=""
          src={image}
          height={144}
          width={144}
          className="block object-cover rounded"
        />
      </a>
    </p>
  );
};

export default Organization;
