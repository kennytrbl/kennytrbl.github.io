import React, { Component } from "react";
import "./style/About.css";
import image from "./img/volunteering.webp";
import Project from "./Project";
import Contact from "./Contact";

class About extends Component {
  render() {
    return (
      <div className="about">
        {/* eslint-disable */}
        <div className="leftPanel">
          <h1>Hello,</h1>
          <p>
            My name is Kenny Zhang. I recently graduated from the University of
            California, San Diego with a degree in Mathematics and Computer
            Science.
          </p>
          <p>
            I am searching for a software engineering position with a company
            that encourages personal development, growth, and teamwork. These
            values are critical to my development as a software engineer. If you
            are an employer, check out my{" "}
            <a
              href="https://drive.google.com/file/d/1HiWjAGNcKjxoN5Ke5-bG9mL0qq7Eqkwo/view?usp=sharing"
              target="_blank"
            >
              résumé
            </a>
            .
          </p>
          <p>
            My main priority right now is honing my technical interview skills.
            To sharpen my programming skills, I frequently build Github projects
            in various languages.
          </p>
          <p>
            When I am not at the computer, I enjoy listening to{" "}
            <a
              href="https://www.youtube.com/watch?v=eelfrHtmk68"
              target="_blank"
            >
              Korean music
            </a>
            , watching{" "}
            <a href="https://www.netflix.com/title/81159258" target="_blank">
              Korean dramas
            </a>
            , consuming <a href="https://www.youtube.com/@mkbhd">tech news</a>,
            and volunteering for various causes in the San Francisco Bay Area.
            (That is me on the far right!)
          </p>

          <img src={image} />
        </div>

        <div className="rightPanel">
          <h1>Projects</h1>
          <p>
            More projects on{" "}
            <a href="https://github.com/kennytrbl" target="__blank">
              Github
            </a>
            .
          </p>
          <Project
            image={require("./img/playlist.webp")}
            name="Playlist"
            link="https://playlist-swart.vercel.app/"
            description="What I am listening to on Spotify and Youtube."
          />
          <Project
            image={require("./img/data-science-project.webp")}
            name="Data Science Project"
            link="https://kennytrbl.github.io/data-science-project/"
            description="A data science project examining the link between walkability and health issues."
          />
          <Project
            image={require("./img/millisecond-calculator.webp")}
            name="Millisecond Calculator"
            link="https://millisecond-calculator.vercel.app/"
            description="A website for converting milliseconds into various time units."
          />
          <Project
            image={require("./img/resource.webp")}
            name="Resource"
            link="https://kennytrbl.github.io/resource/"
            description={
              "A resource for developers to find tools and resources."
            }
          />
          <Project
            image={require("./img/public-discord-birthday-bot.webp")}
            name="Discord Birthday Bot"
            link="https://github.com/AntiSyntaxErrorCrew/public-discord-birthday-bot"
            description={
              "A public version of the Discord bot running in AntiSyntaxErrorCrew Discord."
            }
          />
          <Project
            image={require("./img/is-it-friday-yet.webp")}
            name="Is It Friday Yet?"
            link="https://kennytrbl.github.io/is-it-friday-yet/"
            description={
              "A website that answers the challenging question: Is it Friday yet?"
            }
          />
          <Project
            image={require("./img/bts-discharge-countdown.webp")}
            name="BTS Discharge Countdown"
            link="https://kennytrbl.github.io/bts-discharge-countdown/"
            description={
              "A website that tracks each member of BTS and their military discharge date."
            }
          />
          <Project
            image={require("./img/year-progress.webp")}
            name="Year Progress"
            link="https://kennytrbl.github.io/year-progress/"
            description={"A website that shows the progress of the year."}
          />
          <Project
            image={require("./img/python.webp")}
            name="Python"
            link="https://github.com/kennytrbl/python"
            description={"A collection of Python projects."}
          />
          <Project
            image={require("./img/discord-panda-bot.webp")}
            name="Discord Panda Bot"
            link="https://github.com/kennytrbl/discord-panda-bot"
            description={
              "A public version of the Discord bot that was running in Coder's League Discord."
            }
          />
          <Project
            image={require("./img/hs-playlist.webp")}
            name="HS Playlist"
            link="https://kennytrbl.github.io/hs-playlist/"
            description={
              "A website deployed for memories, showcasing an old high school playlist project."
            }
          />
        </div>
        <Contact />
      </div>
    );
  }
}

export default About;
