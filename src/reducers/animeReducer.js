import { FETCH_DATA, UPDATE_ANIME, SET_ERROR, RESET_DATA } from "../actions";

export const initialState = {
  moviesEpisodes: [],
  isFetchingData: false,
  error: "",
};
//reducer(state, action) -> state
/// the ...symbol is the spread operator
///reducers take the current state and return a new one
///how the reducer changes the store depends on the action
///return {...state, published: true} is about the same as:
///return {
///     title: state.title,
///     body: state.body,
///     published: true
///      }
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
    case RESET_DATA:
      return {
        initialState,
        isFetchingData: false,
        moviesEpisodes: [],
      }
    default:
      return state;
  }
};
