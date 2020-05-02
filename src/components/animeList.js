import React from "react";
import { useSelector } from "react-redux";

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
