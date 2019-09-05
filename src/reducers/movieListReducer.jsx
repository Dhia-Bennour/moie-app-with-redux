import {
    ADD_MOVIE,
   
  } from "../constants/actionsTypes";
  // import FightClub from "../pictures/fight club.jpg";
  // import Snatch from "../pictures/snatch.jpg";
  // import Vendetta from "../pictures/v for vendetta.jpg";
  // import WallE from "../pictures/wall-e.jpg";
  import film from "../pictures/film.jpg";
  import films from "../pictures/films.jpg";

  const initialState = [
    {
      picture: `${film}`,
      title: "film",
      date: "1999",
      rating: 5
    },
    {
      picture: `${films}`,
      title: "films",
      date: "2000",
      rating: 4
    },
    {
      picture: `${film}`,
      title: "film",
      date: "2005",
      rating: 5
    },
    {
      picture: `${films}`,
      title: "films",
      date: "2008",
      rating: 4
    }
  ];
  
  function movieListReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE) {
      console.log(action.movie);
      return state.concat(action.movie);
    }
    // if (action.type === MODIFY_MOVIE) {
    //   return state.map((el, i) => {
    //     if (i === action.i) {
    //       return action.movie;
    //     } else return el;
    //   });
    // }
    // if (action.type === DELETE_MOVIE) {
    //   return state.filter(el => el.title !== action.title);
    // }
  
    return state;
  }
  
  export default movieListReducer;
  