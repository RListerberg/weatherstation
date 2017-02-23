import React, { Component } from 'react';
import './WeatherdataContainer.css';

export default class WeatherdataContainer extends Component {

    render() {

        return (
            <div className="weatherdata-root">

                <div className="weatherdata-header">
                    <p>{this.props.weatherdata.dataDate} {this.props.weatherdata.dataTime}</p>
                </div>

                <div className="weatherdata-table">
                    <table>
                        <tr>
                            <td>Temperature:</td>
                            <td className="weather-value">{this.props.weatherdata.temp}°C</td>
                        </tr>

                        <tr>
                            <td>Humidity:</td>
                            <td className="weather-value">{this.props.weatherdata.humidity}%</td>
                        </tr>

                        <tr>
                            <td>Pressure:</td>
                            <td className="weather-value">{this.props.weatherdata.pressure}hPa</td>
                        </tr>

                        <tr>
                            <td>Wind direction:</td>
                            <td className="weather-value">{this.props.weatherdata.windDirection}</td>
                        </tr>

                        <tr>
                            <td>Wind velocity:</td>
                            <td className="weather-value">{this.props.weatherdata.windVelocity}m/s</td>
                        </tr>

                        <tr>
                            <td>Rainfall:</td>
                            <td className="weather-value">{this.props.weatherdata.rainfall}mm</td>
                        </tr>

                        <tr>
                            <td>Cloud base:</td>
                            <td className="weather-value">{this.props.weatherdata.cloudBase}m</td>
                        </tr>

                        <tr>
                            <td>Cloud coverage:</td>
                            <td className="weather-value">{this.props.weatherdata.cloudCoverage}/8</td>
                        </tr>

                        <tr>
                            <td>Cloud type:</td>
                            <td className="weather-value">{this.props.weatherdata.cloudType}</td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}

