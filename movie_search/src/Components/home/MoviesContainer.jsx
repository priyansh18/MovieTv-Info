import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import NoMovie from "./NoMovie";

class MoviesContainer extends Component {
  render() {
    const { movies, isSearch } = this.props;
    let content = "";

    content =
      movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : isSearch ? (
        <NoMovie />
        ) : (
          ""
      );
    return <div className="row">{content}</div>;
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
