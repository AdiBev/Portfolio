import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>

      <Link to="/About">
        <h2>About</h2>
      </Link>

      <Link to="/Portfolio">
        <h2>Portfolio</h2>
      </Link>
    </nav>
  );
};
