import React, {Component} from 'react';
import FilmList from '../components/FilmList';

class FilmBox extends Component {

  constructor(){
    super();
    this.state = {
      films: [
        {id:1, title: "I, Tonya"},
        {id:2, title: "Finding Your Feet"},
        {id:3, title: "Dark River"},
        {id:4, title: "Red Sparrow"},
        {id:5, title: "Samson"},
        {id:6, title: "Game Night"},
        {id:7, title: "The Meg"},
        {id:8, title: "Monster Family"},
        {id:9, title: "A Fantastic Woman"}
      ]
    }
  }

  render(){
    return (
      <div className="film-box">
        <h1>UK Opening This Week</h1>
        <FilmList films={this.state.films}/>
        <a  className='upcoming-films' href="http://www.imdb.com/calendar/?region=gb"><h4>See more upcoming films >></h4></a>
        <hr></hr>
        <button>Get Showtimes >></button>
      </div>
    )
  }






}

export default FilmBox;
