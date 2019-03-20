import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const MovieGenre = ({genre}) => {
    return (
        <span className="Movie_Genre">{genre} </span>
    );
};

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default MovieGenre;