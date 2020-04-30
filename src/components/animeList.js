import React from 'react';
import { connect } from 'react-redux';

const AnimeList = props => {
    console.log(props)
    return(
        <div>
            {props.MovieEpisodes.map(MoviesEpisode => (
                <div>
                <div key={MoviesEpisode.mal_id}>
                {MoviesEpisode.title}</div>
                <img src={MoviesEpisode.image_url} />
                <p> {MoviesEpisode.synopsis}</p>
                <button><a href={MoviesEpisode.url}>See More</a></button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        MoviesEpisodes: state.MoviesEpisodes,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(AnimeList)