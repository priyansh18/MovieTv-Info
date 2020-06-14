import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 mb-5">
        <div className="col-12 card card-body bg-dark text-center">
          <img src={movie.Poster} alt="Movie Cover" className="w-100 mb-2" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <a href="#" className="btn btn-primary">
            Movie Details
            <i className="fas fa=chevron-right"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default MovieCard;
