import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const MoviePoster = ({ poster1, alt }) => {
    //console.log({ poster1 });
    
    return (
        <div>
            <img src={poster1} alt={alt} title={alt} className="Movie_Poster"/>
        </div>
    );
};

MoviePoster.propTypes = {
    poster1: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default MoviePoster;