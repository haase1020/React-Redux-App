import { FETCH_DATA, UPDATE_ANIME, SET_ERROR } from '../actions';

export const initialState = {
    MoviesEpisodes: [],
    isFetchingData: false,
    error:""
};

export const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData: true,
                MoviesEpisodes: []
            };
        case UPDATE_ANIME:
            return {
                ...state,
                MoviesEpisodes: action.payload,
                isFetchingData: false,
            };
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }
}