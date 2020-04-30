import React from 'react';
import { connect } from "react-redux";
import { getData } from "./actions";
import AnimeList from './components/animeList';
import './App.css';

function App(props) {

  const handleData = e => {
    e.preventDefault();
    props.getData();
  }
  return (
    <div className="App">
     <h1>Anime</h1>
     {props.isFetchingData ? (
       <div> getting the data</div>
     ): (
       <button onClick={handleData}>Anime</button>)}
       <AnimeList />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}
export default connect(mapStateToProps,
  { getData })(App);
