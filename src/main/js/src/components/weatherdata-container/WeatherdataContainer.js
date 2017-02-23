import React, { Component } from 'react';
import './WeatherdataContainer.css';

export default class WeatherdataContainer extends Component {

    fillTable(){
        return this.props.weatherDataArray.map((weatherdata) => {
            return (
                <tr className="table-row">
                    <td>{weatherdata.dataDate} {weatherdata.dataTime}</td>
                    <td>{weatherdata.temp}°C</td>
                    <td>{weatherdata.humidity}%</td>
                    <td>{weatherdata.pressure}hPa</td>
                    <td>{weatherdata.windDirection}</td>
                    <td>{weatherdata.windVelocity}m/s</td>
                    <td>{weatherdata.rainfall}mm</td>
                    <td>{weatherdata.cloudBase}m</td>
                    <td>{weatherdata.cloudCoverage}/8</td>
                    <td>{weatherdata.cloudType}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="weatherdata-root">
                <div className="weatherdata-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                            <th>Wind direction</th>
                            <th>Wind velocity</th>
                            <th>Rainfall</th>
                            <th>Cloud base</th>
                            <th>Cloud coverage</th>
                            <th>Cloud type</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.fillTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

