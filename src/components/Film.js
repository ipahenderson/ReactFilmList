import React, {Component} from 'react';

class Film extends Component{

  render(){
    return (
      <div className="film">
        <img className='movie-icon' src="https://cdn3.iconfinder.com/data/icons/glypho-movie-and-video/64/film-camera-alt-512.png"></img>
        <h3>{this.props.title}</h3>
        <a className='showtimes-link'>Showtimes</a>
      </div>
    )
  }


}

export default Film;
