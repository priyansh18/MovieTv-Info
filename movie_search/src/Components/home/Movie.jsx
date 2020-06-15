import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "./../../actions/searchAction";

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src="#movie-poster" alt="Poster" className="thumbnail" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">Movie Title</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>Release:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>IMDB rating:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>Director:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong>Movie Genre
              </li>
              <li className="list-group-item">
                <strong>Actor:</strong>Movie Genre
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body my-5 bg-dark text-light">
            <div className="col-md-12">
              <h3>About</h3>
              About the movie
              <hr />
              <a href="" target="_blank" className="btn btn-primary">
                View on IMDB
              </a>
              <a href="" className="btn btn-default text-light">
                Go Back To Search
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
