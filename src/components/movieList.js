import React, { Component } from "react";
import MovieCard from "./movieCard";
import AddMovie from "./addMovie";
import "./movieList.css";
import { connect } from "react-redux";
import { addMovie } from "../actions/actions";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
     
      picture: "",
      title: "",
      date: "",
      rating: ""
    };
  }

//   componentDidUpdate(prevProps){
//     if(prevProps.editMovie !== this.props.editMovie){ this.setState(
//       {
//         picture: this.props.editMovie.picture,
//         title: this.props.editMovie.title,
//         date: this.props.editMovie.date,
//         rating: this.props.editMovie.rating
//       }) }
//  }
  addOne = () => {
    this.setState({
      visible: true
    });
  };
  // edit = () => {
  //   this.setState(
  //     {
  //       picture: this.props.editMovie.picture,
  //       title: this.props.editMovie.title,
  //       date: this.props.editMovie.date,
  //       rating: this.props.editMovie.rating,
  //       edit: true,
  //     }
  //   );
  //   this.addOne();
  // };
  close = e => {
    this.setState({
      edit: false,
      visible: false,
      picture: "",
      title: "",
      date: "",
      rating: ""
    });
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return  (
      <div>
        <div className="list">
          {this.props.movieList.map((el, i) => (
            <MovieCard movie={el} key={i}  />
          ))}
          <AddMovie addOne={this.addOne} />
        </div>
        <div
          className="modal"
          style={{ display: this.state.visible ? "flex" : "none" }}
        >
          <p>Picture</p>
          <input
            type="text"
            name="picture"
            onChange={this.change}
            value={this.state.picture}
          />
          <p>Title</p>
          <input
            type="text"
            name="title"
            onChange={this.change}
            value={this.state.title}
          />
          <p>Date</p>
          <input
            type="text"
            name="date"
            onChange={this.change}
            value={this.state.date}
          />
          <p>Rating</p>
          <input
            type="number"
            name="rating"
            onChange={this.change}
            value={this.state.rating}
          />
          <div>
            <input
              type="button"
              onClick={() => {
                if (this.state.rating<6&&this.state.rating>0) {
                  const { title, picture, date, rating } = this.state;
                  const newMovie = { title, picture, date, rating };
                  this.props.addMovie(newMovie)
                  this.close();
                } else return alert("Please enter a valid rating");
              }}
              value="Add"
            />
            <input type="button" onClick={this.close} value="Close" />
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   const editMovie= state.editReducer;
//   return {
//     editMovie,
//   inedx: state.movieListReducer.findIndex(el => el === editMovie)}
// }

const mapDispatchToProps = dispatch => ({
  addMovie: newMovie => {
    dispatch(addMovie(newMovie));
  }
});
const mapStateToProps = state => ({
  movieList: state.movieListReducer.filter(m =>
      m.title.toLowerCase().includes(state.searchReducer.toLowerCase())
    ).filter(movie => movie.rating >= Number(state.ratingReducer)),
    rate: state.ratingReducer
});

const ConnectedMovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default ConnectedMovieList;
