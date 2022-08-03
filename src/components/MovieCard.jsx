import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../styles/MovieCard.css'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section className="movie">
        <img className="image" src={ imagePath } alt={ title } />
        <div className="div-card">
          <h4 className="title">{ title }</h4>
          <h5 className="subtitle">{ subtitle }</h5>
          <p className="story">{ storyline }</p>
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
