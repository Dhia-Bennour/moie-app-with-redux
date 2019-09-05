import {ADD_MOVIE, SEARCH_MOVIE, SEARCH_RATING} from '../constants/actionsTypes';
export function addMovie(movie) {
  return { type: ADD_MOVIE, movie };
}
// export function modifyMovie(movie, i) {
//   return { type: MODIFY_MOVIE, movie, i };
// }
// export function deleteMovie(title) {
//   return { type: DELETE_MOVIE, title };
// }
// export function editMovie(movie) {
//   return { type: EDIT_MOVIE, movie };
// }
export function searchMovie(search) {
  return { type: SEARCH_MOVIE, search}
}
export function searchRating(rating) {
  return { type: SEARCH_RATING, rating}
}
