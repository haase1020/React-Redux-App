import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions";
import { resetData } from "./actions";
import AnimeList from "./components/animeList";
import "./App.css";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme/customTheme";

import { CSSReset, IconButton, Button, Text } from "@chakra-ui/core";

function App(props) {
  const dispatch = useDispatch();
  const isFetchingData = useSelector((state) => state.isFetchingData);

  const handleData = (e) => {
    e.preventDefault();
    dispatch(getData());
  };
  const handleResetData = (e) => {
    e.preventDefault();
    dispatch(resetData());

  }

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
            margin= "2%"
            onClick={handleData}
          >
           
          </IconButton>
        )}
        <Button
            variantColor="blue"
            size="lg"
            width="100px"
            variant="solid"
            margin= "2%"
            onClick={handleResetData}
          > Reset
           
          </Button>
        <AnimeList />
      </div>
    </ThemeProvider>
  );
}

export default App;
