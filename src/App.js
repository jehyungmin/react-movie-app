// import React, { Component } from 'react';
// import './App.css';
// import Movie from './Movie';

// class App extends Component {
//  // paging=1;

//   state = {
    
//   }

//   componentWillMount() {
//     console.log('will mount')
//   }

//   componentDidMount() {
//     console.log('did mount');
//     // setTimeout(() => {
//     //   this.setState({
//     //     greeting: 'hello again!'
//     //   });

//     // }, 5000);

//     //setTimeout(() => {
//     //   console.log('hello');
//     //   this.setState({
//     //     movies: [
//     //       {
//     //         title: "movie1",
//     //         poster: "http://image.kmib.co.kr/online_image/2018/0906/611211110012661971_5.jpg"
//     //       },
//     //       {
//     //         title: "movie2",
//     //         poster: "http://image.kmib.co.kr/online_image/2018/0906/611211110012661971_5.jpg"
//     //       },
//     //       {
//     //         title: "movie3",
//     //         poster: "http://image.kmib.co.kr/online_image/2018/0906/611211110012661971_5.jpg"
//     //       },
//     //       {
//     //         title: "movie4",
//     //         poster: "http://image.kmib.co.kr/online_image/2018/0906/611211110012661971_5.jpg"
//     //       },
//     //       {
//     //         title: "movie5",
//     //         poster: "http://image.kmib.co.kr/online_image/2018/0906/611211110012661971_5.jpg"
//     //       },
//     //       {
//     //         title: "add movie",
//     //         poster: "https://img.insight.co.kr/static/2018/09/12/700/7m19bv2u03s1j3651r4r.jpg"
//     //       }
//     //     ]
//     //   })
//     // }, 1000);
//     this._getMovies();

//   }

//   _renderMovies = () => {
//     const movies = this.state.movies.map((movie) => {
//       //console.log(movie)
//       return <Movie
//         title={movie.title_english}
//         poster={movie.medium_cover_image}
//         key={movie.id}
//         genres={movie.genres}
//         synopsis={movie.synopsis} />
//     })
//     return movies;
//   }

//   _getMovies = async () => {
//     const movies = await this._collApi();
//     this.setState({
//        movies
//     });
//   }

//   // hendleIncrement = () => {
//   //   return ++this.paging;
//   // }

//   // hendleDncrement = () => {
//   //   return --this.paging;
//   // }

//   _collApi = () => {
//     const url = 'https://yts.am/api/v2/list_movies.json?sort by=download_count&limit=50';
//     //const page = '&page=';
//     //const urlPage = url + page;

//     return fetch(url)
//       .then(response => response.json())
//       .then(json => json.data.movies)
//       .catch(err => console.log(err))
//   }

//   render() {
//     console.log('render')
//     const { movies } = this.state;
//     return (
//       <div className={movies ? "App" : "App-loading"}>
//         {/* {this.state.greeting} */}
//         {/* {this.state.movies.map((movie, index) => {
//           return <Movie title={movie.title} poster = { movie.poster } key={index}/>
//         })} */}
//         {this.state.movies ? this._renderMovies() : 'logding'}
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';

class App extends Component {
  static defaultProps = {
    mmovie: []
  }

  constructor(props) {
    super(props);
    this.state = {
      mmovie: []
    };
  }

  componentWillMount() {
    console.log('will mount')
    axios.get('https://yts.am/api/v2/list_movies.json?sort by=download_count&limit=50').then(res => {
      this.setState({mmovie: res.data.data.movies});
    });
  }

  _renderMovies = () => {
    const movies = this.state.mmovie.map((movie) => {
      //console.log(movie)
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis} />
    })
    return movies;
  }

  render() {
    console.log('render')
    console.log("123", this.state.mmovie)
    // const { movies } = this.state;
    return (
      <div className={this.state.mmovie ? "App" : "App-loading"}>
        {this.state.mmovie ? this._renderMovies() : 'logding'}
      </div>
    );
  }
}

export default App;
