// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;

    return (
      <section className="movie">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="sub-cont">
          <h4 className="cont-title">{ title }</h4>
          <h5 className="cont-subtitle">{ subtitle }</h5>
          <p className="cont-story">{ storyline }</p>
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
  }).isRequired,
};

export default MovieCard;
