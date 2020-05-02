import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions";
import AnimeList from "./components/animeList";
import "./App.css";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme/customTheme";

import { Button, CSSReset, IconButton, Text } from "@chakra-ui/core";

function App(props) {
  const dispatch = useDispatch();
  const isFetchingData = useSelector((state) => state.isFetchingData);

  const handleData = (e) => {
    e.preventDefault();
    dispatch(getData());
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div className="App">
        <Text fontSize="50px">Anime</Text>
        {isFetchingData ? (
          <div> getting the data</div>
        ) : (
          <IconButton
            variantColor="blue"
            size="lg"
            width="100px"
            variant="solid"
            icon="search"
            onClick={handleData}
          >
            Anime
          </IconButton>
        )}
        <AnimeList />
      </div>
    </ThemeProvider>
  );
}

export default App;
