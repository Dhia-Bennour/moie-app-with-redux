import React, { Component } from 'react';
import './movieCard';


export default class AddMovie extends Component {
  render() {
    return (
      <div>
        <button className="card add-button" onClick={this.props.addOne}>+</button>
      </div>
    )
  }
}
