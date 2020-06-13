import React, { Component } from "react";
import { searchMovie } from "./../../actions/searchAction";
import { connect } from "react-redux";

class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" />
            Search for a movie,TV series...
          </h1>
          <form>
            <input
              type="text"
              className="form-control"
              name="SearchText"
              placeholder="Search Movie,TV Series ..."
              onChange={this.onChange}
            />
            <button type="Submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  text: state.movies.text,  
});

export default connect(mapStatesToProps, { searchMovie })(SearchForm);
