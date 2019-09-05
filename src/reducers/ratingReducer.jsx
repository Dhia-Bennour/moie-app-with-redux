import { SEARCH_RATING } from "../constants/actionsTypes";
const ratingReducer = (state = 0, action) => {
    if(action.type === SEARCH_RATING) {
        return action.rating
    }
    return state
}

export default ratingReducer