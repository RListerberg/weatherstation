import React, {Component} from "react";
import {serverCommunications} from "../../ServerCommunications";
import "./StatsRoot.css";
import StatsDetail from "../statsdetail/StatsDetail";


export default class StatsRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    componentDidMount() {
        this.extractData();
    }

    renderData() {
        return this.state.array.map((currPoint) => {
            return (
                    <StatsDetail title={currPoint.title} value={currPoint.value} unit={currPoint.unit}/>
            );
        });
    }

    extractData() {
        Promise.all([serverCommunications.getAvgTemp(),
            serverCommunications.getAvgRainfall(),
            serverCommunications.getAvgWindVelocity(),
            serverCommunications.getAvgCloudCoverage(),
            serverCommunications.getAvgHumidity(),
            serverCommunications.getAvgPressure()
        ]).then((res) => {
            var tempArray = [];

            tempArray.push({
                title: "TEMPERATURE",
                value: res[0].body.toFixed(2),
                unit: "°C"
            });

            tempArray.push({
                title: "RAINFALL",
                value: res[1].body.toFixed(2),
                unit: "mm"
            });

            tempArray.push({
                title: "WIND VELOCITY",
                value: res[2].body.toFixed(2),
                unit: "m/s"
            });

            tempArray.push({
                title: "CLOUD COVERAGE",
                value: res[3].body.toFixed(2),
                unit: "/8"
            });

            tempArray.push({
                title: "HUMIDITY",
                value: res[4].body.toFixed(2),
                unit: "%"
            });

            tempArray.push({
                title: "PRESSURE",
                value: res[5].body.toFixed(1),
                unit: "hPa"
            });

            this.setState({array: tempArray});

        });
    }

    render() {
        return (
            <div className="stats-root">
                <div className="details-container">
                    <h2>Average weather total:</h2>
                </div>
                <div className="details-container">
                    {this.renderData()}
                </div>
            </div>
        )
    }
}
