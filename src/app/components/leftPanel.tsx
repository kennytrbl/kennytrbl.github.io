import React, { Component } from "react";
import Carousel from "./carousel";

class LeftPanel extends Component {
  render() {
    return (
      <div className="float-none w-full lg:float-left lg:w-[40%] xl:w-[30%]">
        <p className="font-bold leading-none mb-4 mt-4 text-4xl tracking-tight">Hi,</p>
        <p>I am Kenny Zhang, a recent Mathematics and Computer Science graduate from UC San Diego.</p>
        <p className="mb-4 mt-4">
          I am looking for a software engineering role with a company that values growth, teamwork, and development. If
          you are hiring, check out my{" "}
          <a
            href="https://drive.google.com/file/d/1br1CkeR1LAKvVavwHvzdjrBExILcaOPs/view?usp=sharing"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            résumé
          </a>
          . I also have multiple{" "}
          <a
            href="https://www.linkedin.com/in/kennyzhang5/details/recommendations/"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            LinkedIn recommendations
          </a>{" "}
          highlighting my skills and contributions.
        </p>
        <p className="mb-4 mt-4">
          I spend my time building projects in various languages and practicing technical problems to sharpen my skills.
        </p>
        <p>
          Outside of coding, I enjoy{" "}
          <a
            href="https://stats.fm/kenny"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            Korean music
          </a>
          ,{" "}
          <a
            href="https://www.netflix.com/title/81707950"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            Kdramas
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/watch?v=xf-zV1uTkW0&t=203s"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            basketball
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/@mkbhd"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            tech news
          </a>
          , and{" "}
          <a
            href="https://www.instagram.com/reel/DDWNTSXxdvl/"
            target="_blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            volunteering
          </a>{" "}
          with AAPI groups in the Bay Area.
        </p>
        <p className="mb-4 mt-4">
          Got any song recommendations, cool projects, or just want to connect? Drop me a message through the{" "}
          <a href="#contact" className="text-[#1ce0e0] text-decoration-none hover:underline">
            contact form
          </a>
          —I would love to hear from you!
        </p>
        <Carousel />
      </div>
    );
  }
}

export default LeftPanel;
