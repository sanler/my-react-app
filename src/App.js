import React, {Component} from 'react';
import Header from './components/Header';
import {listItems} from './components/ListDemo'
import {MoviesList} from './components/ListDemo'
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';

import './App.css';

class App extends Component {

  render(){  

    return (
      <div className="App">
        <Header/>
        <ul className="list-style" >{listItems}</ul>
        <MoviesList/>
        <hr />
        <DynamicMoviesList />
      </div>
    );

  }
}

export default App;
