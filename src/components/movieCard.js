import React, { Component } from 'react';
import './movieCard.css'
import SearchRating from './searchRating';
import { connect } from 'react-redux';
import {addMovie} from '../actions/actions';

 class MovieCard extends Component {
    render() {
        const {picture, title, date, rating} = this.props.movie
        return (
        <div className="card">
            <img src={picture} alt={title} className="picture"/>
            <h2 className="title">{title}</h2>
            <h4 className="date">{date}</h4>
            <SearchRating rate={rating}/>
            {/* <div>
                <button className="movie-button" onClick={()=>{this.props.editMovie(this.props.movie); this.props.edit()}}>Edit</button>
                <button className="movie-button" onClick={()=>{this.props.deleteMovie(title)}}>Remove</button>
            </div> */}
        </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
   
    addMovie: movie => {
        dispatch(addMovie(movie))
    } 
})
export default connect(null, mapDispatchToProps)(MovieCard)