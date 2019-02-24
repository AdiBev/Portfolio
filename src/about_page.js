import React from "react";

import { LangsTools } from "./langs_tools";

export const AboutPage = () => {
  return (
    <div className="about-page-wrapper" data-aos="zoom-in-right">
      <h1>About</h1>
      <div className="about-page-content">
        <p>
          I build responsive web apps, websites using CSS3, Sass or using a
          framework like Bootstrap. I use React to build web apps and to make
          them more pretty I use Sass and styled components.
        </p>
        <p>
          I use my knowledge and tools to save time in development, including
          preprocessors and my own custom boilerplates to kick start a project.
        </p>
        <p>
          I enjoy working as a team member as well as independently. I'm always
          excited to learn new things and apply them in every day work life.
        </p>
      </div>
      <LangsTools />
    </div>
  );
};
