import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import Spinner from "./../layout/Spinner";
import MoviesContainer from "./MoviesContainer";

class Landing extends Component {
  state = {
    isSearch: false,
  };

  setIsSearch = () => {
    this.setState({ isSearch: true });
  };
  render() {
    const { isSearch } = this.state;
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm setIsSearch={this.setIsSearch} />
        {loading ? (
          <Spinner />
        ) : (
          <MoviesContainer loading={loading} isSearch={isSearch} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
