import React, { Component } from 'react';
import { serverCommunications } from '../../ServerCommunications';
import './StatsRoot.css';

export default class StatsRoot extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            weatherdata: {content: []}
        });
    }

    getAllStats(page) {
        serverCommunications.getStats(page)
            .then((response) => {
                this.setState({weatherdata: JSON.parse(response.text)});
                console.log(this.state.weatherdata);
            });
    }

    extractData() {
        return this.state.weatherdata.content.map((weather) => {
            return (
                    <div key={weather.id}>
                        <h3>{weather.id}</h3>
                        Temp: {weather.temp}
                    </div>
            )
        })
    }

    link() {
        if(!this.state.weatherdata.last) {
            var pageUp = this.state.weatherdata.number + 1;
            return (
                <div>
                    <p className="nextlink" onClick={() => this.getAllStats(pageUp)}>Next 20</p>
                </div>
            )
        }

    }

    render() {
        return (
            <div id="stats-root">
                <p>Stats page</p>
                <button type="button" onClick={() => this.getAllStats(0)}>Get Stats</button>
                {this.extractData()}
                {this.link()}
            </div>
        )
    }
}
