import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "./../../actions/searchAction";
import Spinner from "./../layout/Spinner";

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} alt="Poster" className="thumbnail" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>{movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Release:</strong>{movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong>{movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB rating:</strong>{movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong>{movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong>{movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actor:</strong>{movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body my-5 bg-dark text-light">
            <div className="col-md-12">
              <h3>About:</h3>
              {movie.Plot}
              <hr />
              <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View on IMDB
              </a>
              <a href="/" className="btn btn-default text-light">
                Go Back To Search
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
