import { SEARCH_MOVIE } from "../constants/actionsTypes";
const searchReducer = (state = '', action) => {
    if(action.type === SEARCH_MOVIE) {
        return action.search
    }
    return state
}

export default searchReducer