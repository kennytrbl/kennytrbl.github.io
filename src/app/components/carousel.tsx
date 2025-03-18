import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering.webp",
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering2.webp",
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering3.webp",
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering4.webp",
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering5.webp",
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering6.webp",
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering7.webp",
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const carousel = () => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(carousel, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex items-center justify-start mt-6 relative overflow-hidden h-80 w-full">
      {images.map((image, index) => (
        <Image
          alt={`Volunteering image ${index + 1}`}
          src={image}
          height={500}
          width={500}
          key={index}
          className={`h-80 w-full object-contain absolute transition-opacity duration-500 ease-in-out ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          quality={75}
        />
      ))}
    </div>
  );
};

export default Carousel;
