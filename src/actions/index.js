import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ANIME = "UPDATE_ANIME";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
    .get('https://api.jikan.moe/v3/search/anime?q=heroacademia&limit=16')
    .then(res => {
        console.log("axios get request", res.data.results)
        dispatch({ type: UPDATE_ANIME, payload:res.data.results })
    })
    .catch(error => console.error(error))
    dispatch({type: SET_ERROR, payload: "Error gathering data"})
}