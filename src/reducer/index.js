import { combineReducers } from 'redux';
import MovieReducer from './reducer_movies';
import ActiveMovie from './reducer_active-movie';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  movies: MovieReducer,
  activeMovie: ActiveMovie
});

export default rootReducer;
