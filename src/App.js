import React from 'react';
import './App.css';
import MovieList from './container/movie_list';
import MovieDetail from './container/movie_detail';

class App extends React.Component {
	render() {
	  return (
    	<div className="row">
      		<div className="col-md-1">
    		</div>
      		<MovieList />
      		<MovieDetail />
    	</div>
  );

}
}

export default App;
