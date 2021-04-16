import React from "react";
import { useLocation } from "react-router-dom";
import { CreatedContainer, Button } from "../utils/styles";

function CreatedMeme() {
  const location = useLocation();
  const imgUrl = location.state;

  return (
    <CreatedContainer>
      <img src={imgUrl} alt="created" />
      <Button onClick={() => navigator.clipboard.writeText(imgUrl)}>
        Copy Img Location
      </Button>
    </CreatedContainer>
  );
}

export default CreatedMeme;
