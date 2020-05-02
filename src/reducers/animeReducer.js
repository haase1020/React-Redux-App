import { FETCH_DATA, UPDATE_ANIME, SET_ERROR } from "../actions";

export const initialState = {
  moviesEpisodes: [],
  isFetchingData: false,
  error: "",
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        moviesEpisodes: [],
      };
    case UPDATE_ANIME:
      return {
        ...state,
        moviesEpisodes: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
