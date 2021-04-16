import React from "react";
import { Link } from "react-router-dom";
import { HomeLink } from "../utils/styles";

function HomepageButton() {
  return (
    <div>
      <HomeLink to="/"> To Front Page</HomeLink>
    </div>
  );
}

export default HomepageButton;
