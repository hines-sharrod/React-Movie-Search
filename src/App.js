import './App.css';

import React from 'react';
import SearchMovie from './components/SearchMovies';

const App = () => (
  <div className="container">
    <h1 className="title">React Movie Search</h1>
    <SearchMovie />
  </div>
)

export default App;