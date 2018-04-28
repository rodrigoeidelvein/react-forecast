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

  td:first-of-type, td:first-of-type > div {
    height: 200px;
    width: 250px;
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
