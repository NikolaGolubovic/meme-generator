import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MainContainer } from "./utils/styles";
import "./App.css";
import Memes from "./components/Memes";
import Meme from "./components/Meme";
import CreatedMeme from "./components/CreatedMeme";
import HomepageButton from "./components/HomepageButton";

function App() {
  const [memeTemplates, setMemeTemplates] = useState([]);
  const [singleMemeTemplate, setSingleMemeTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((response) => {
        setMemeTemplates(response.data.memes);
      });
  }, []);
  return (
    <MainContainer>
      <BrowserRouter>
        <HomepageButton />
        <Switch>
          <Route path="/meme/finish" component={CreatedMeme} />
          <Route path="/meme/:id" component={Meme} />
          <Route
            path="/"
            render={(props) => (
              <Memes
                {...props}
                memeTemplates={memeTemplates}
                singleMemeTemplate={singleMemeTemplate}
                setSingleMemeTemplate={setSingleMemeTemplate}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
