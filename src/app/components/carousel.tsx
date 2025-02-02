import React, { useEffect, useState } from "react";

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
    <div className="flex items-center justify-center mt-4 ">
      {images.map((image, index) => (
        // eslint-disable-next-line
        <img
          className="h-80 object-contain"
          key={index}
          src={image}
          style={{ display: slideIndex === index ? "block" : "none" }}
        />
      ))}
    </div>
  );
};

export default Carousel;
