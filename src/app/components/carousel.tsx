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
    "https://xysaswoufwhmmdoyufwh.supabase.co/storage/v1/object/public/kennytrbl/volunteering8.webp",
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const carousel = () => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(carousel, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex items-center justify-start mt-6">
      {images.map((image, index) => (
        <Image
          alt=""
          src={image}
          height={500}
          width={500}
          key={index}
          className="h-80 object-contain"
          style={{ display: slideIndex === index ? "block" : "none" }}
        />
      ))}
    </div>
  );
};

export default Carousel;
