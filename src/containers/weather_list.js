import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';
import Chart from '../components/chart';

const Centered = css`
  vertical-align: middle !important;
  text-align: center !important;
`

const Td = styled.td`
  ${Centered}
`

const Tr = styled.tr`
  ${Centered}
`

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <Tr key={name}>
        <Td>{name}</Td>
        <Td><Chart color="orange" data={temps} units="ºC" /></Td>
        <Td><Chart color="green" data={pressures} units="hPa" /></Td>
        <Td><Chart color="blue" data={humidities} units="%" /></Td>
      </Tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <Tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </Tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
