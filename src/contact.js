import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact_container">
      <p>
        <a href="https://github.com/AdiBev" target="_blank" rel="noopener">
          Github
        </a>{" "}
        <span className="contact-icons">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </span>
      </p>

      <p>
        adityabev@gmail.com
        <span className="contact-icons">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </span>
      </p>
    </div>
  );
};
