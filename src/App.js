import React from 'react';
import { connect } from "react-redux";
import { getData } from "./actions";
import AnimeList from './components/animeList';
import './App.css';
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme/customTheme";

import {
  Button,
  CSSReset,
  IconButton,
  Text
} from "@chakra-ui/core";

function App(props) {

  const handleData = e => {
    e.preventDefault();
    props.getData();
  }
  console.log('handledata props', props)
  return (
    <ThemeProvider theme={customTheme}>
    <CSSReset />
    <div className="App">
     <Text fontSize="50px">Anime</Text>
     {props.isFetchingData ? (
       <div> getting the data</div>
     ): (
       <IconButton 
       variantColor="blue" 
       size="lg" 
       width="100px"
       variant="solid" 
       icon="search"
       onClick={handleData}>Anime</IconButton>)}
       <AnimeList />
    </div>
  </ThemeProvider>
  );
}


const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}
export default connect(mapStateToProps,
  { getData })(App);
