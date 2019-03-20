// import React, { Component } from 'react';
// import './Movie.css';

// class Movie extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello Movie</h1>
//             </div>
//         );
//     }
// }


// export default Movie;

import React from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';
import PropTypes from 'prop-types';
import MovieGenre from './MovieGenre';
import LinesEllipsis from 'react-lines-ellipsis';

const Movie = ({ title, poster, genres, synopsis}) => {

    //console.log({title,poster});
    return (
        <div className="Movie">
            <div className="Movie_columns">
                <MoviePoster poster1={poster} alt={title}/>
            </div>
            <div className="Movie_columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie_Synopsis">
                        <LinesEllipsis
                            text={synopsis}
                            maxLine='4'
                            ellipsis='..더보기'
                            trimRight
                            basedOn='letters'
                            />
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

export default Movie;