import React, { Component } from "react";
import Carousel from "./carousel";
import NowPlaying from "./nowPlaying";

class LeftPanel extends Component {
  render() {
    return (
      <div className="float-none w-full lg:float-left lg:w-[30%]">
        <p className="font-bold leading-none mb-4 mt-4 text-4xl tracking-tight">Hello,</p>
        <p>
          My name is Kenny Zhang. I recently graduated from the University of California, San Diego with a degree in
          Mathematics and Computer Science.
        </p>
        <p className="mb-4 mt-4">
          I am searching for a software engineering position with a company that encourages personal development,
          growth, and teamwork. These values are critical to my development as a software engineer. If you are an
          employer, check out my{" "}
          <a
            href="https://drive.google.com/file/d/1br1CkeR1LAKvVavwHvzdjrBExILcaOPs/view?usp=sharing"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            résumé
          </a>
          .
        </p>
        <p className="mb-4 mt-4">
          My main priority right now is honing my technical interview skills. To sharpen my programming skills, I
          frequently build Github projects in various languages.
        </p>
        <p>
          When I am not at the computer, I enjoy listening to{" "}
          <a
            href="https://www.youtube.com/watch?v=eelfrHtmk68"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            Korean music
          </a>
          , watching{" "}
          <a
            href="https://www.netflix.com/title/81159258"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            Korean dramas
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/watch?v=xf-zV1uTkW0&t=203s"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            basketball
          </a>
          , consuming{" "}
          <a
            href="https://www.youtube.com/@mkbhd"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            tech news
          </a>
          , and volunteer with AAPI groups in the San Francisco Bay Area.
        </p>
        <p className="font-bold leading-none mt-4 text-lg tracking-tight">Listening to:</p>
        <NowPlaying />
        <Carousel />
      </div>
    );
  }
}

export default LeftPanel;
