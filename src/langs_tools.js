import React from "react";

export const LangsTools = () => {
  return (
    <div className="langstools_container" data-aos="zoom-in-right">
      <div className="langs">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3 &#8594; Sass, Bootstrap</li>
          <li>Javascript &#8594; ES6, React, Jquery</li>
          <li>React &#8594; Redux, Material-UI, styled components</li>
        </ul>
      </div>

      <div className="tools">
        <h2>Tools</h2>
        <ul>
          <li>Webpack</li>
          <li>Babel</li>
          <li>Chrome DevTools</li>
          <li>Windows command line</li>
          <li>Linux command line</li>
          <li>Git</li>
          <li>Atom</li>
        </ul>
      </div>
    </div>
  );
};
