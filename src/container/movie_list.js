import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class MovieList extends Component {
  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.title}
        onClick={ () => this.props.selectMovie(movie)}
        className="list-group-item">
        {movie.title} - {movie.genre}</li>
      );
  });
  }

  render() {
    return (
      <div className="col-md-5">
        <label className="list_item">List of Movies</label>
      <ul className="list-group">
        {this.renderList()}
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
