import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if(!this.props.movie) {
      return <div className="sub-details col-md-5"> Please Select a Movie or TV Series to get details!</div>;
    }
    return (
      <div className="col-md-5">
        <label className="list_item">Details for selected {this.props.movie.genre} is: </label>
        <div className="sub-details">
          <div><label className="title">Title :</label> {this.props.movie.title}</div>
          <div><label className="title">Genre :</label> {this.props.movie.genre}</div>
          <div><label className="title">Created by :</label> {this.props.movie.create}</div>
          <div><label className="title">Produced by :</label> {this.props.movie.producer}</div>
          <div><label className="title">Release Date :</label> {this.props.movie.release}</div>
          <div><label className="title">Country of Origin :</label> {this.props.movie.country}</div>
          <div><label className="title">More on Wiki :</label> <a href={this.props.movie.url}>Click here</a></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie : state.activeMovie
  };
}

export default connect(mapStateToProps)(MovieDetail);
