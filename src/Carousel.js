import React, { useEffect, useState } from "react";
import "./style/Carousel.css";

const Slideshow = () => {
  const images = [
    require("./img/volunteering.webp"),
    require("./img/volunteering2.webp"),
    require("./img/volunteering3.webp"),
    require("./img/volunteering4.webp"),
    require("./img/volunteering5.webp"),
    require("./img/volunteering6.webp"),
    require("./img/volunteering7.webp"),
    require("./img/volunteering8.webp"),
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
    <div className="carousel">
      {images.map((image, index) => (
        // eslint-disable-next-line
        <img
          key={index}
          src={image}
          style={{ display: slideIndex === index ? "block" : "none" }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
