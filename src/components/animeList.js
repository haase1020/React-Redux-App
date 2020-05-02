import React from "react";
import { useSelector } from "react-redux";
//can also use import { connect } from 'redux;
// PhotosList = React.createClass({  })
// PhotosList = connect(mapState, mapDispatch)(PhotosList)


//mapState takes the ste and returns props to be used by the component
const Episode = ({ episode }) => {
  return (
    <div>
      <h3>{episode.title}</h3>
      <img src={episode.image_url} alt="movie images" />
      <p>{episode.synopsis}</p>
      <button>
        <a href={episode.url}>See More</a>
      </button>
    </div>
  );
};

const AnimeList = () => {
  const movies = useSelector((state) => state.moviesEpisodes);

  return (
    <div>
      {movies.map((episode) => (
        <Episode key={episode.mal_id} episode={episode} />
      ))}
    </div>
  );
};

export default AnimeList;
