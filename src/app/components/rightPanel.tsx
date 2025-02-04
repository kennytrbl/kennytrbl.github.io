import React, { Component } from "react";
import ProjectList from "./projectList";
import OrganizationList from "./organizationList";
import Contact from "./contact";

class RightPanel extends Component {
  render() {
    return (
      <div className="min-h-screen w-full lg:float-right lg:w-[65%]">
        <p className="font-bold leading-none mb-4 mt-4 text-4xl tracking-tight">
          Projects
        </p>
        <p>
          More projects on{" "}
          <a
            href="https://github.com/kennytrbl"
            target="__blank"
            className="text-[#1ce0e0] text-decoration-none hover:underline"
          >
            Github
          </a>
          .
        </p>
        <ProjectList />
        <p className="font-bold leading-none mb-4 mt-6 text-4xl tracking-tight">
          Volunteer Organizations
        </p>
        <p className="mb-2">
          Here is a list of organizations for which I volunteer for.
        </p>
        <OrganizationList />
        <p className="font-bold leading-none mb-4 mt-6 text-4xl tracking-tight">
          Contact Me
        </p>
        <Contact />
      </div>
    );
  }
}

export default RightPanel;
