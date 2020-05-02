import React from "react";
import { useSelector } from "react-redux";
import { Image, Box, Flex, Text } from "@chakra-ui/core";
//can also use import { connect } from 'redux;
// PhotosList = React.createClass({  })
// PhotosList = connect(mapState, mapDispatch)(PhotosList)


//mapState takes the ste and returns props to be used by the component
const Episode = ({ episode }) => {
  return (
  <Flex alignItems="center"
  justifyContent="center"
  >
    <Box
    maxW="md"
    borderWidth="1px"
    rounded="1g"
    overflow="hidden"
    margin="2%"
    backgroundColor="#e7ecf0"
    >
      <Text fontSize="30px" as="u">{episode.title}</Text>
      <Image
      rounded="full"
      size= "100px"
      margin="2%"
       src={episode.image_url} alt="movie images" />
      <Text as="em"
      >{episode.synopsis}</Text>
      <button>
        <a href={episode.url}>See More</a>
      </button>
    </Box>
  </Flex>
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
