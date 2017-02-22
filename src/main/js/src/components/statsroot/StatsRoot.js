import React, {Component} from "react";
import {serverCommunications} from "../../ServerCommunications";
import "./StatsRoot.css";
import StatsDetail from "../statsdetail/StatsDetail";

let output = "";

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
                <div key={currPoint.title}>
                    <StatsDetail title={currPoint.title} value={currPoint.value} unit={currPoint.unit}/>
                </div>
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
                title: "Temperature",
                value: res[0].body,
                unit: "C"
            });

            tempArray.push({
                title: "Rainfall",
                value: res[1].body,
                unit: "mm"
            });

            tempArray.push({
                title: "Wind velocity",
                value: res[2].body,
                unit: "m/s"
            });

            tempArray.push({
                title: "Cloud coverage",
                value: res[3].body,
                unit: "/8"
            });

            tempArray.push({
                title: "Humidity",
                value: res[4].body,
                unit: "%"
            });

            tempArray.push({
                title: "Pressure",
                value: res[5].body,
                unit: "hPa"
            });

            this.setState({array: tempArray});

        });
    }

    render() {
        console.log("Im rendering!"+output);
        return (
            <div id="stats-root">
                {this.renderData()}
            </div>
        )
    }
}
