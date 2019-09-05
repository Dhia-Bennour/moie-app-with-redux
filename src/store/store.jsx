import { createStore, combineReducers } from 'redux';
import movieListReducer from '../reducers/movieListReducer';
import searchReducer from '../reducers/searchReducer';
import ratingReducer from '../reducers/ratingReducer';


const store = createStore(combineReducers({
    movieListReducer,
    searchReducer,
    ratingReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;