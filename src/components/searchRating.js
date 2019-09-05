import React from "react";
import { connect } from "react-redux";
import { searchRating } from "../actions/actions";

const SearchRating = ({ rate, searchRating}) => {
  return (
    <div>
      {Array.from({ length: 5 }, (star, i) => (
        <span
          onClick={() => {
            searchRating(i + 1);
          }}
        >
          {i < rate ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  searchRating: rating => {
    dispatch(searchRating(rating));
  }
});

const ConnectedSearchRating = connect(
  null,
  mapDispatchToProps
)(SearchRating);
export default ConnectedSearchRating;
