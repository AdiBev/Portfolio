import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs} from "@fortawesome/free-brands-svg-icons";

import { projectData } from "./project_data";

export default class Portfolio extends Component {
  mapProjectData = proj_data => {
    return proj_data.port_data.map(proj => {
      const {
        proj_title,
        proj_desc,
        proj_url,
        github_url,
        proj_icons
      } = proj.data;
      return (
        <div
          className={`portfolio_item ${proj_title}`}
          key={proj_title}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <header className="proj_header">
            <a href={proj_url ? proj_url : github_url} target="_blank">
              <h2>{proj_title}</h2>
            </a>

            <span>
              <FontAwesomeIcon icon={proj_icons.react_icon} size="2x" />
            </span>
            <span>
              <FontAwesomeIcon icon={proj_icons.js_icon} size="2x" />
            </span>
          </header>
          <div className="proj_desc">
            <p>{proj_desc}</p>
          </div>
          {proj_url && (
            <div className="app_link">
              <a href={proj_url} target="_blank">
                View project
              </a>
            </div>
          )}
          <div className="github_link">
            <a href={github_url} target="_blank">
              Github repo
            </a>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="portfolio_container">
        {projectData.map(this.mapProjectData)}
      </div>
    );
  }
}
