import React from "react";
import { useHistory } from "react-router-dom";
import {
  Wellcome,
  PolygonDiv,
  PolygonDivsContainer,
  PolygonImg,
} from "../utils/styles";

function Memes({ memeTemplates, singleMemeTemplate }) {
  const history = useHistory();
  return (
    <>
      <Wellcome>Choose Template</Wellcome>
      <PolygonDivsContainer>
        {!singleMemeTemplate &&
          memeTemplates.map((template) => {
            return (
              <PolygonDiv>
                <PolygonImg
                  key={template.id}
                  src={template.url}
                  alt={template.name}
                  onClick={() => {
                    history.push({
                      pathname: `/meme/${template.name
                        .split(" ")
                        .map((str) => str.toLowerCase())
                        .join("-")}`,
                      state: { template },
                    });
                  }}
                />
              </PolygonDiv>
            );
          })}
      </PolygonDivsContainer>
    </>
  );
}

export default Memes;
