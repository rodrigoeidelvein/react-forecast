import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

import { injectGlobal } from 'styled-components';

injectGlobal`
  .input-group {
    margin: 20px 0px;
  }

  svg {
    height: 150px;
  }
`

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
