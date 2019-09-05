import React, { Component } from "react";
import ConnectedMovieList from "./movieList";
import ConnectedSearchMovie from "./searchMovie";
import SearchRating from "./searchRating";
import "./movieContainer.css";
import { connect } from "react-redux";

class MovieContainer extends Component {

  render() {
    return (
      <div className="container">
        <div className="search-bar">
          <SearchRating  />
          <ConnectedSearchMovie  />
        </div>
        <ConnectedMovieList
          // list={
          //   this.props.movieList
          // }
          // // new={this.newMovie}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   movieList: state.movieListReducer.filter(m =>
//       m.title.toLowerCase().includes(state.searchReducer.toLowerCase())
//     ).filter(movie => movie.rating >= Number(state.ratingReducer)),
//     rate: state.ratingReducer
// });

const ConnectedMovieContainer = connect(
  null,
  null
)(MovieContainer);

export default ConnectedMovieContainer;
