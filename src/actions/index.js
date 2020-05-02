import axios from "axios";

//here are the actions
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ANIME = "UPDATE_ANIME";
export const SET_ERROR = "SET_ERROR";
export const RESET_DATA = "RESET_DATA";

//to run an action, use dispatch(). This changes the store's state
//actions are objects that always have a type key
//getData is the action creator - a function that returns things you can pass to dispatch()
export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://api.jikan.moe/v3/search/anime?q=heroacademia&limit=16")
    .then((res) => {
      dispatch({ type: UPDATE_ANIME, payload: res.data.results });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: "Error gathering data" });
    });
};

export const resetData = () => (dispatch) => {
    dispatch({ type: RESET_DATA, payload: [] })
}