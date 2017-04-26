import React, { Component } from 'react';
import places from './constants/Places';

class PlacesNav extends Component {

onClick(text) {
  this.props.onPlaceClick(text);
}

  renderPlaces(){
    var elements = [];

    for(var place in places) {

      const { text } = places[place];

      elements.push(
        <h2 onClick={this.onClick.bind(this, text)}>
            {text}
        </h2>
      )
    }
    return elements;
  }
  render(){
    return(
      <div className ="place-nav">
        {this.renderPlaces()}
      </div>
    )
  }
}
export default PlacesNav;
