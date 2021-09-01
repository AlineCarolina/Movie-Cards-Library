// implement MovieList component here
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.promp;
    return (
      <div>
        { movies }
      </div>);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieList;
