import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovie } from "../actions/actions";

class SearchMovie extends Component {

  render() {
    return (
      <div>
        <input
          placeholder="search..."
          className="search"
          onChange={e => {
              const title=e.target.value;
            this.props.searchMovie(title);
          }}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  searchMovie: title => {
    dispatch(searchMovie(title));
  }
});
const ConnectedSearchMovie = connect(
  null,
  mapDispatchToProps
)(SearchMovie);
export default ConnectedSearchMovie;
